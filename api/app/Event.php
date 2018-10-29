<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'shortDescription',
        'description',
        'image',
        'organiserId',
        'price',
        'placesTotal',
        'placesAvailable',
        'location',
        'startAt',
        'endAt'
    ];

    public function location(){
        return $this->belongsTo('App\Location', 'locationId');
    }

    public function organiser(){
        return $this->belongsTo('App\User', 'organiserId');
    }

}
