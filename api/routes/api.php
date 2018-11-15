<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// @see: https://laravel-json-api.readthedocs.io/en/latest/basics/routing/
JsonApi::register('default', ['namespace' => 'Api', 'id' => '[\d]+'], function ($api, $router) {
    $api->resource('posts', [
        'has-one' => [
            'author' => ['inverse' => 'users'],
        ],
        'has-many' => ['comments'],
    ]);
    $api->resource('comments', [
        'has-one' => [
            'post',
            'author' => ['inverse' => 'users']
        ]
    ]);
    $api->resource('events', [
        'has-many' => [
            'guests' => ['inverse' => 'users'],
            'organisers' => ['inverse' => 'users']
        ]
    ]);
    $api->resource('users', [
        'has-many' => ['posts', 'comments'],
    ]);
});
