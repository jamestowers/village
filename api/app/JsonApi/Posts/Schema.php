<?php

namespace App\JsonApi\Posts;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'posts';

    /**
     * @param $post
     *      the domain record being serialized.
     * @return string
     */
    public function getId($post): ?string
    {
        return (string) $post->getRouteKey();
    }

    /**
     * @param $post
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($post): ?array
    {
        return [
            'title' => $post->title,
            'body'  => $post->body,
            'publishedAt' => $post->published_at ? $post->published_at->toAtomString() : null,
            'createdAt' => $post->created_at->toAtomString(),
            'updatedAt' => $post->updated_at->toAtomString(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function getRelationships($post, $isPrimary, array $includeRelationships)
    {
        /** @var Post $post */
        return [
            'author' => [
                // self::SHOW_DATA => isset($includeRelationships['author']),
                self::DATA => function () use ($post) {
                    return $post->author;
                },
                self::SHOW_SELF => true,
                self::SHOW_RELATED => true,
            ],
            // TODO: Not incude comments here, see note at end of `Data` section here:
            // https://laravel-json-api.readthedocs.io/en/latest/basics/schemas/#relationships
            'comments' => [
                self::META => function () use ($post) {
                    return [
                        'total' => $post->comments_count,
                    ];
                },
                self::SHOW_SELF => true,
                self::SHOW_RELATED => true,
            ],
            
        ];
    }

}
