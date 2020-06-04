<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
        protected $fillable = [
         'user_id', 'name', 'desc', 'event_start_date', 'event_start_time', 'event_end_date', 'event_end_time', 'assign_to', 'status',
    ];
}
