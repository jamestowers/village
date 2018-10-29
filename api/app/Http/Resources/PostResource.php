<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class PostResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => 'posts',
            'id' => (string)$this->id,
            'attributes' => [
              'title' => $this->title,
              'excerpt' => $this->excerpt,
              'body' => $this->body,
              'image' => $this->image,
              'publishedAt' => $this->publishedAt,
            ],
            'relationships' => new PostRelationshipResource($this),
            'links'         => [
                'self' => route('posts.show', ['id' => $this->id]),
            ],
        ];
    }
}