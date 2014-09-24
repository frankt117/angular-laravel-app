<?php

class UserServiceProviderTableSeeder extends Seeder
{
  public function run() {
    DB::table('user_service_providers')->delete();

    UserServiceProvider::create(array(
      'user_id' => 3,
      'name' => 'SP_SEED',
      'work_address' => '1092 Duke Drive',
      'work_city' => 'McKinney',
      'work_state' => 'TX',
      'work_zip' => '75070',
      'billing_address' => '1092 Duke Drive',
      'billing_city' => 'McKinney',
      'billing_state' => 'TX',
      'billing_zip' => '75070',
      'phone' => '214-993-2898',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1

    ));

    UserServiceProvider::create(array(
      'user_id' => 4,
      'name' => 'Lincoln Bose',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Frisco',
      'work_state' => 'TX',
      'work_zip' => '75034',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Frisco',
      'billing_state' => 'TX',
      'billing_zip' => '75034',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}