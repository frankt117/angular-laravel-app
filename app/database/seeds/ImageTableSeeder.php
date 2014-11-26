<?php

class ImageTableSeeder extends Seeder
{
  public function run() {
    DB::table('images')->delete();

    Image::create(array(
      'title' => 'Media Room Example',
      'description' => 'Gold media room description.',
      'path' => '/images/upload/media_room_1.jpg',
      'package_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Image::create(array(
      'title' => 'Media Room Example 2',
      'description' => 'Silver media room description.',
      'path' => '/images/upload/media_room_2.jpg',
      'package_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


  }

}