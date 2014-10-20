<?php

class ServiceCategoryTableSeeder extends Seeder
{
  public function run() {
    DB::table('service_categories')->delete();

    ServiceCategory::create(array(
      'code' => 'H-THEA',
      'name' => 'Home Theather',
      'description' => 'Installtion of home theater equipment',
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    ServiceCategory::create(array(
      'code' => 'H-AUTO',
      'name' => 'Home Automation',
      'description' => 'Installtion of home automation equipment',
      'sequence' => '2',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    ServiceCategory::create(array(
      'code' => 'PLUM',
      'name' => 'Plumbing',
      'description' => 'Plumbing services',
      'sequence' => '3',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    ServiceCategory::create(array(
      'code' => 'TELE',
      'name' => 'Television',
      'description' => 'Television installation services',
      'sequence' => '4',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    ServiceCategory::create(array(
      'code' => 'LAWN',
      'name' => 'Lawn Mowing',
      'description' => 'Lawn mowing services',
      'sequence' => '5',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    ServiceCategory::create(array(
      'code' => 'MAID',
      'name' => 'Maid Service',
      'description' => 'Maid services',
      'sequence' => '6',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


  }

}