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


    UserServiceProvider::create(array(
      'user_id' => 5,
      'name' => 'Mike Jones',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Denton',
      'work_state' => 'TX',
      'work_zip' => '75117',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Denton',
      'billing_state' => 'TX',
      'billing_zip' => '75117',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    UserServiceProvider::create(array(
      'user_id' => 6,
      'name' => 'Kenny Buyers',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Mckinney',
      'work_state' => 'TX',
      'work_zip' => '75070',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Mckinney',
      'billing_state' => 'TX',
      'billing_zip' => '75070',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    UserServiceProvider::create(array(
      'user_id' => 7,
      'name' => 'Derek Akunne',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Plano',
      'work_state' => 'TX',
      'work_zip' => '75025',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Plano',
      'billing_state' => 'TX',
      'billing_zip' => '75025',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    UserServiceProvider::create(array(
      'user_id' => 8,
      'name' => 'John Chelf',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Paris',
      'work_state' => 'TX',
      'work_zip' => '75777',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Paris',
      'billing_state' => 'TX',
      'billing_zip' => '75777',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    UserServiceProvider::create(array(
      'user_id' => 9,
      'name' => 'Dajon Williams',
      'work_address' => '1839 Chief Parkway',
      'work_city' => 'Collony',
      'work_state' => 'TX',
      'work_zip' => '75023',
      'billing_address' => '1839 Chief Parkway',
      'billing_city' => 'Collony',
      'billing_state' => 'TX',
      'billing_zip' => '75023',
      'phone' => '214-211-0993',
      'company_id' => 2,
      'designation' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}