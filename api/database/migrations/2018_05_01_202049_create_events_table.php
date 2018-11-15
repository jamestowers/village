<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('shortDescription')->nullable();
            $table->mediumText('description');
            $table->string('image');
            $table->unsignedInteger('organiserId');
            $table->unsignedInteger('locationId')->nullable();
            $table->decimal('price', 6, 2)->nullable();
            $table->integer('placesTotal')->nullable();
            $table->integer('placesAvailable')->nullable();
            $table->timestamp('startAt');
            $table->timestamp('endAt')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
