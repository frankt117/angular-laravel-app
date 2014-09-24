<?php

class UserCustomerTableSeeder extends Seeder
{
  public function run() {
    DB::table('user_customers')->delete();

    UserCustomer::create(array(
      'user_id' => 4,
      'name' => 'CUSTOMER_SEED',
      'primary_address' => '1117 Cortana Drive',
      'primary_city' => 'McKinney',
      'primary_state' => 'TX',
      'primary_zip' => '75070',
      'billing_address' => '1117 Cortana Drive',
      'billing_city' => 'McKinney',
      'billing_state' => 'TX',
      'billing_zip' => '75070',
      'created_by' => 1,
      'updated_by' => 1
    ));

    UserCustomer::create(array(
      'user_id' => 5,
      'name' => 'Thor Hammer',
      'primary_address' => '10118 Spartan Spear',
      'primary_city' => 'Frisco',
      'primary_state' => 'TX',
      'primary_zip' => '75034',
      'billing_address' => '10118 Spartan Spear',
      'billing_city' => 'Frisco',
      'billing_state' => 'TX',
      'billing_zip' => '75034',
      'created_by' => 1,
      'updated_by' => 1
    ));


  }

}