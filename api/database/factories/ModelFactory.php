<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'firstName' => $faker->firstName,
        'lastName' => $faker->lastName,
        'email' => $faker->email,
        'password' => app('hash')->make($faker->password),
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence(3, true),
        'excerpt' => $faker->paragraphs(1, true),
        'body' => $faker->paragraphs(10, true),
        'image' => 'https://source.unsplash.com/collection/190727/1600x900',
        'authorId' => 1,
        'publishedAt' => $faker->dateTimeThisYear()
    ];
});

$factory->define(App\Location::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->sentence(2, true),
        'description' => $faker->paragraphs(2, true),
        'image' => 'https://source.unsplash.com/collection/190727/1600x900',
        'addressLine1' => $faker->buildingNumber . ' ' . $faker->streetName,
        'city' => $faker->city,
        'postcode' => $faker->postcode,
        'lat' => $faker->latitude(50, 52),
        'lng' => $faker->longitude(-3, -1)
    ];
});

$factory->define(App\Event::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence(3, true),
        'shortDescription' => $faker->paragraph(6, true),
        'description' => $faker->paragraphs(4, true),
        'image' => 'https://source.unsplash.com/collection/190727/1600x900',
        'organiserId' => 1,
        'price' => $faker->randomDigit,
        'placesTotal' => $faker->randomDigit,
        'placesAvailable' => $faker->randomDigit,
        'locationId' => 1,
        'startAt' => $faker->dateTimeThisYear(),
        'endAt' => $faker->dateTimeThisYear()
    ];
});
