<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    // protected $fillable = [
    //     'name',
    //     'description',
    //     'due_date',
    //     'status',
    //     'image_path',
    //     'created_by',
    //     'updated_by'
    // ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updated_by()
    {
        return $this->belongsTo(User::class);
    }

}
