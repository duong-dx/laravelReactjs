<?php

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Post::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = Faker\Factory::create('ja_JP');
        $limit = 100;

        for ($i = 0; $i < $limit; $i++) {
            Post::create([
                'title' => $faker->text(30),
                'slug' => $faker->unique()->text(10),
                'content' => $faker->text(50),
            ]);
        }
    }
}
