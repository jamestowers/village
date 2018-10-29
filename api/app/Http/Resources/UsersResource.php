<?php
namespace App\Http\Resources;
use App\Comment;
use App\Post;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class UsersResource extends ResourceCollection
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
        return UserResource::collection($this->collection);
    }

    public function with($request)
    {
        $comments = $this->collection->flatMap(
            function ($user) {
                return $user->comments;
            }
        );
        
        $posts  = $this->collection->flatMap(
            function ($user) {
                return $user->posts;
            }
        );

        $included = $posts->merge($comments)->unique();
        return [
            'links'    => [
                'self' => route('users.index'),
            ],
            'included' => $this->withIncluded($included),
        ];
    }
    
    private function withIncluded(Collection $included)
    {
        return $included->map(
            function ($include) {
                if ($include instanceof Post) {
                    return new PostResource($include);
                }
                if ($include instanceof Comment) {
                    return new CommentResource($include);
                }
            }
        );
    }
}