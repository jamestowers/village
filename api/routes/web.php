<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/posts', [
    'as' => 'posts.index', 
    'uses' => 'PostController@index'
]);
$router->get('/posts/{id}', [
    'as' => 'posts.show', 
    'uses' => 'PostController@show'
]);
$router->post('/posts/{id}/comments', [
    'as' => 'comments.create', 
    'uses' => 'CommentController@create'
]);

$router->get('/users', [
    'as' => 'users.index', 
    'uses' => 'UserController@index'
]);
$router->get('/users/{id}', [
    'as' => 'users.show', 
    'uses' => 'UserController@show'
]);
$router->get('/users/{id}/posts', [
    'as' => 'user.posts',
    'uses' => 'UserController@show'
]);