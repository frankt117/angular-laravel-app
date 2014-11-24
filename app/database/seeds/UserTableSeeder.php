<?php

class UserTableSeeder extends Seeder
{
  public function run() {
    DB::table('users')->delete();

    User::create(array(
      'email' => 'IX@gmail.com',
      'password' => Hash::make('ADMIN_SEED'),
      'category' => 'company',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'frankjtorresjr@gmail.com',
      'password' => Hash::make('GMPIX'),
      'category' => 'company',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'sp_seed@gmail.com',
      'password' => Hash::make('PROVIDER_SEED'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'lincolnbose@gmail.com',
      'password' => Hash::make('SP2'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'mikejones@gmail.com',
      'password' => Hash::make('SP3'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'kennybuyers@gmail.com',
      'password' => Hash::make('SP4'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'derekakunne@gmail.com',
      'password' => Hash::make('SP5'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'johnchelf@gmail.com',
      'password' => Hash::make('SP6'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'dajonwilliams@gmail.com',
      'password' => Hash::make('SP7'),
      'category' => 'service_provider',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'customer@gmail.com',
      'password' => Hash::make('CUSTOMER_SEED'),
      'category' => 'customer',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));

    User::create(array(
      'email' => 'thor@gmail.com',
      'password' => Hash::make('THOR'),
      'category' => 'customer',
      'effective_from' => date('Y-m-d H:i:s'),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}