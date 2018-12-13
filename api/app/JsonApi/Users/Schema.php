<?php

namespace App\JsonApi\Users;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'users';

    /**
     * @param $user
     *      the domain record being serialized.
     * @return string
     */
    public function getId($user)
    {
        return (string) $user->getRouteKey();
    }

    /**
     * @param $user
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($user)
    {
        return [
            'firstName' => $user->firstName,
            'lastName'  => $user->lastName,
            'image'  => $user->image,
        ];
    }

    /**
     * @inheritdoc
     */
    public function getRelationships($post, $isPrimary, array $includeRelationships)
    {
        /** @var Post $post */
        return [
            'posts' => [
                self::META => function () use ($post) {
                    return [
                        'total' => $post->posts_count,
                    ];
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
