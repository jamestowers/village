<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'image',
        'addressLine1',
        'city',
        'postcode',
        'lat',
        'lng',
        'publishedAt'
    ];

}
