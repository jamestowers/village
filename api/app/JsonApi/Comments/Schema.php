<?php

namespace App\JsonApi\Comments;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'comments';

    /**
     * @param $comment
     *      the domain record being serialized.
     * @return string
     */
    public function getId($comment)
    {
        return (string) $comment->getRouteKey();
    }

    /**
     * @param $comment
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($comment)
    {
        return [
            'body' => $comment->body,
            'createdAt' => $comment->created_at->toAtomString(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function getRelationships($comment, $isPrimary, array $includeRelationships)
    {
        /** @var Comment $comment */
        return [
            'author' => [
                // self::SHOW_DATA => isset($includeRelationships['author']),
                self::DATA => function () use ($comment) {
                    return $comment->author;
                },
                self::SHOW_SELF => true,
                self::SHOW_RELATED => true,
            ],
            'post' => [
                // self::SHOW_DATA => isset($includeRelationships['post']),
                self::DATA => function () use ($comment) {
                    return $comment->post;
                },
                self::SHOW_SELF => true,
                self::SHOW_RELATED => true,
            ],
        ];
    }
}
