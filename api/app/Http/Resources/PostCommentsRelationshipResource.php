<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCommentsRelationshipResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        $post = $this->additional['post'];

        return [
            'data'  => CommentIdentifierResource::collection($this->collection),
            'links' => [],
        ];
    }

    public function with($request)
    {
        return [
            'links' => [
                'self' => route('posts.index'),
            ],
        ];
    }
}