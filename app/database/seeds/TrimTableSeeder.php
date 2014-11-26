<?php

class TrimTableSeeder extends Seeder
{
  public function run() {
    DB::table('trims')->delete();

    Trim::create(array(
      'name' => 'Gold',
      'price' => 149.99,
      'comment' => 'Free HDMI cable!',
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 1,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Silver',
      'comment' => 'Same day install.',
      'price' => 129.99,
      'currency' => '$',
      'user_id' => 7,
      'package_id' => 1,
      'market_id' => 1,
      'sequence' => 2,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Platinum',
      'comment' => 'Free cables included.',
      'price' => 199.99,
      'currency' => '$',
      'user_id' => 9,
      'package_id' => 1,
      'market_id' => 1,
      'sequence' => 3,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Gold',
      'comment' => 'Same day service available.',
      'price' => 149.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 2,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Silver',
      'comment' => 'Same day service available.',
      'price' => 129.99,
      'currency' => '$',
      'user_id' => 5,
      'package_id' => 2,
      'market_id' => 1,
      'sequence' => 2,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Silver',
      'comment' => 'Same day service available.',
      'price' => 109.99,
      'currency' => '$',
      'user_id' => 6,
      'package_id' => 4,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Platinum',
      'comment' => 'Same day service available.',
      'price' => 1999.99,
      'currency' => '$',
      'user_id' => 7,
      'package_id' => 5,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Gold',
      'comment' => 'Same day service available.',
      'price' => 3999.99,
      'currency' => '$',
      'user_id' => 8,
      'package_id' => 6,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Gold',
      'comment' => 'Same day service available.',
      'price' => 99.99,
      'currency' => '$',
      'user_id' => 9,
      'package_id' => 7,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));



  }

}