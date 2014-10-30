<?php

class ImageTableSeeder extends Seeder
{
  public function run() {
    DB::table('images')->delete();

    Image::create(array(
      'title' => 'media_room_1.jpg',
      'description' => 'Media room example',
      'path' => '/images/upload/',
      'package_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Image::create(array(
      'title' => 'media_room_2.jpg',
      'description' => 'Media room example 2',
      'path' => '/images/upload/',
      'package_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


  }

}