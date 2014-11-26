<?php

class MarketTableSeeder extends Seeder
{
  public function run() {
    DB::table('markets')->delete();

    Market::create(array(
      'code' => '001',
      'name' => 'Dallas/Forth Worth Area',
      'city' => 'Dallas',
      'state' => 'Texas',
      'country' => 'United State of America',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


  }

}