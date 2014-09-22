<?php

class UserTableSeeder extends Seeder
{
  public function run() {
    DB::table('users')->delete();

    User::create(array(
      'email' => 'IX@gmail.com',
      'password' => 'ADMIN_SEED',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'IX.com@gmail.com',
      'password' => 'MANAGER_SEED',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'IX@gmail.com',
      'password' => 'PROVIDER_SEED',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'IX@gmail.com',
      'password' => 'PROVIDER_SEED',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}