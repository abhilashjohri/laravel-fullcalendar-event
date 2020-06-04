<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

      //  Event name,Event details,Event start    date, Event start time,Event end date,Event end time ,Event assigned to
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->Integer('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->longText('desc')->nullable();
            $table->date('event_start_date');
            $table->time('event_start_time');
            $table->date('event_end_date');
            $table->time('event_end_time');
             $table->string('assign_to');
             $table->tinyInteger('status')->default('1');

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
