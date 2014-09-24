<?php

class UserTableSeeder extends Seeder
{
  public function run() {
    DB::table('users')->delete();

    User::create(array(
      'email' => 'IX@gmail.com',
      'password' => 'ADMIN_SEED',
      'category' => 'company',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'frankjtorresjr@gmail.com',
      'password' => 'GMPIX',
      'category' => 'company',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'sp_seed@gmail.com',
      'password' => 'PROVIDER_SEED',
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'sp2@gmail.com',
      'password' => 'SP2',
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'customer@gmail.com',
      'password' => 'CUSTOMER_SEED',
      'category' => 'customer',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'thor@gmail.com',
      'password' => 'THOR',
      'category' => 'customer',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}