<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UserRelationshipResource extends Resource
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
            'posts' => (new UserPostsRelationshipResource($this->posts))->additional(['user' => $this]),
            'comments' => (new UserCommentsRelationshipResource($this->comments))->additional(['user' => $this]),
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