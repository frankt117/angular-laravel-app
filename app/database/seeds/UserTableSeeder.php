<?php

class UserTableSeeder extends Seeder
{
  public function run() {
    DB::table('users')->delete();

    User::create(array(
      'name' => 'ADMIN_SEED',
      'email' => 'IX@gmail.com',
      'category' => 'admin'
    ));

    User::create(array(
      'name' => 'Frank117',
      'email' => 'frankjtorresjr@gmail.com',
      'category' => 'admin'
    ));

    User::create(array(
      'name' => 'PROVIDER_SEED',
      'email' => 'IX@gmail.com',
      'category' => 'provider'
    ));

    User::create(array(
      'name' => 'CUSTOMER_SEED',
      'email' => 'IX@gmail.com',
      'category' => 'customer'
    ));


  }

}