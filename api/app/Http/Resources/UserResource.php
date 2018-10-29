<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
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
            'type' => 'users',
            'id' => (string)$this->id,
            'attributes' => [
              'firstName' => $this->firstName,
              'lastName' => $this->lastName,
              'email' => $this->email,
            ],
            'relationships' => new UserRelationshipResource($this),
            'links'         => [
                'self' => route('users.show', ['id' => $this->id]),
            ],
        ];
    }
}