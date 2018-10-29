<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class CommentResource extends Resource
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
            'type' => 'comments',
            'id' => (string)$this->id,
            'attributes' => [
              'body' => $this->body,
              'createdAt' => $this->created_at,
            ],
            'relationships' => new CommentRelationshipResource($this),
            'links'         => [],
        ];
    }
}