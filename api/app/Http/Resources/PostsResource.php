<?php
namespace App\Http\Resources;
use App\Comment;
use App\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

class PostsResource extends ResourceCollection
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
        return PostResource::collection($this->collection);
    }

    public function with($request)
    {
        $comments = $this->collection->flatMap(
            function ($post) {
                return $post->comments;
            }
        );

        $authors = $this->collection->map(
            function ($post) {
                return $post->author;
            }
        );

        $included = $authors->merge($comments)->unique()->flatten();

        /* echo '<pre>';
        print_r(collect($included));
        echo '</pre>';
        exit(0); */
        
        return [
            'links'    => [
                'self' => route('posts.index'),
            ],
            'included' => $this->withIncluded($included),
        ];
    }

    private function withIncluded(Collection $included)
    {
        return $included->map(
            function ($include) {
                if ($include instanceof User) {
                    return new UserResource($include);
                }
                if ($include instanceof Comment) {
                    return new CommentResource($include);
                }
            }
        );
    }
}