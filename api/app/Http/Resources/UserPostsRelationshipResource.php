<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserPostsRelationshipResource extends ResourceCollection
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
        $user = $this->additional['user'];

        return [
            'data'  => PostIdentifierResource::collection($this->collection),
            'links' => [],
        ];
    }

    public function with($request)
    {
        return [
            'links' => [
                'self' => route('users.index'),
            ],
        ];
    }
}