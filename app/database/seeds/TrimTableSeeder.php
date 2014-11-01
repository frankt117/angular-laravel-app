<?php

class TrimTableSeeder extends Seeder
{
  public function run() {
    DB::table('trims')->delete();

    Trim::create(array(
      'name' => 'Gold',
      'price' => 149.99,
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
      'price' => 129.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 1,
      'market_id' => 1,
      'sequence' => 2,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Platinum',
      'price' => 199.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 1,
      'market_id' => 1,
      'sequence' => 3,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Gold',
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
      'price' => 129.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 2,
      'market_id' => 1,
      'sequence' => 2,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Silver',
      'price' => 109.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 4,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Platinum',
      'price' => 1999.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 5,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


    Trim::create(array(
      'name' => 'Gold',
      'price' => 3999.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 6,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Trim::create(array(
      'name' => 'Gold',
      'price' => 99.99,
      'currency' => '$',
      'user_id' => 4,
      'package_id' => 7,
      'market_id' => 1,
      'sequence' => 1,
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));



  }

}