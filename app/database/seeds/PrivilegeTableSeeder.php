<?php

class PrivilegeTableSeeder extends Seeder
{
  public function run() {
    DB::table('privileges')->delete();

    Privilege::create(array(
      'id' => '1',
      'name' => 'Privilege Module',
      'group' => 'Privilege Management'
    ));

    Privilege::create(array(
      'id' => '2',
      'name' => 'Create Privilege',
      'group' => 'Privilege Management'
    ));

    Privilege::create(array(
      'id' => '3',
      'name' => 'Edit Privilege',
      'group' => 'Privilege Management'
    ));



    Privilege::create(array(
      'id' => '20',
      'name' => 'User Module',
      'group' => 'User Management'
    ));

    Privilege::create(array(
      'id' => '21',
      'name' => 'Create User',
      'group' => 'User Management'
    ));

    Privilege::create(array(
      'id' => '22',
      'name' => 'Edit User',
      'group' => 'User Management'
    ));



    Privilege::create(array(
      'id' => '100',
      'name' => 'Package Module',
      'group' => 'Package Management'
    ));

    Privilege::create(array(
      'id' => '101',
      'name' => 'Edit Package',
      'group' => 'Package Management'
    ));

    Privilege::create(array(
      'id' => '102',
      'name' => 'Add Package',
      'group' => 'Package Management'
    ));




  }

}