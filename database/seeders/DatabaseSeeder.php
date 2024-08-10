<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => time()
        ]);
        User::factory()->create([
            'name' => 'User',
            'email' => 'user@user.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => time()
        ]);

        Project::factory()->count(20)->hasTasks(20)->create();
    }
}
