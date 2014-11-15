<?php

class UserEmployeeTableSeeder extends Seeder
{
  public function run() {
    DB::table('user_employees')->delete();

    UserEmployee::create(array(
      'user_id' => 1,
      'company_id' => 1,
      'code' => '',
      'name' => 'ADMIN_SEED',
      'work_address' => '1092 Duke Drive',
      'work_city' => 'McKinney',
      'work_state' => 'TX',
      'work_country' => 'United States of America',
      'work_zip' => '75070',
      'phone' => '214-993-2898',
      'nick_name' => 'ADMIN',
      'created_by' => 1,
      'updated_by' => 1

    ));

    UserEmployee::create(array(
      'user_id' => 2,
      'company_id' => 1,
      'code' => '',
      'name' => 'MANAGER_SEED',
      'work_address' => '1928 Drake Corner',
      'work_city' => 'Frisco',
      'work_state' => 'TX',
      'work_country' => 'United States of America',
      'work_zip' => '75034',
      'phone' => '214-123-2343',
      'nick_name' => 'Chief',
      'created_by' => 1,
      'updated_by' => 1

    ));


  }

}