<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'firstName' => 'James',
            'lastName' => 'Towers',
            'email' => 'james@songdrop.com',
            'password' => app('hash')->make('Buster123'),
        ]);

        factory(App\User::class, 10)->create()->each(function ($user) {
            $user->posts()->saveMany(factory(App\Post::class, 3)->make());
        });
        // factory(App\Post::class, 10)->create();
        factory(App\Location::class, 10)->create();
        factory(App\Event::class, 5)->create();
        factory(App\Comment::class, 5)->create();
    }
}
