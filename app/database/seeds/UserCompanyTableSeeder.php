<?php

class UserCompanyTableSeeder extends Seeder
{
  public function run() {
    DB::table('user_companies')->delete();

    UserCompany::create(array(
      'user_id' => 1,
      'name' => 'ADMIN_SEED',
      'work_address' => '1092 Duke Drive',
      'work_city' => 'McKinney',
      'work_state' => 'TX',
      'work_zip' => '75070',
      'phone' => '214-993-2898',
      'department' => '',
      'created_by' => 1,
      'updated_by' => 1

    ));

    UserCompany::create(array(
      'user_id' => 1,
      'name' => 'MANAGER_SEED',
      'work_address' => '1928 Drake Corner',
      'work_city' => 'Frisco',
      'work_state' => 'TX',
      'work_zip' => '75034',
      'phone' => '214-123-2343',
      'department' => '',
      'created_by' => 1,
      'updated_by' => 1

    ));


  }

}