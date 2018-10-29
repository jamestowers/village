<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class PostRelationshipResource extends Resource
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
        return [
            'author'   => [
                'links' => [
                    'self'    => route('users.show', ['id' => $this->id]),
                ],
                'data'  => new UserIdentifierResource($this->author),
            ],
            'comments' => (new PostCommentsRelationshipResource($this->comments))->additional(['post' => $this]),
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