<?php

class PrivilegeTypeTableSeeder extends Seeder
{
  public function run() {
    DB::table('privilege_types')->delete();

    PrivilegeType::create(array(
      'name' => 'Insert',
      'created_by' => 1,
      'updated_by' => 1
    ));

    PrivilegeType::create(array(
      'name' => 'Updated',
      'created_by' => 1,
      'updated_by' => 1
    ));

    PrivilegeType::create(array(
      'name' => 'Delete',
      'created_by' => 1,
      'updated_by' => 1
    ));

    PrivilegeType::create(array(
      'name' => 'Save',
      'created_by' => 1,
      'updated_by' => 1
    ));

    PrivilegeType::create(array(
      'name' => 'Edit',
      'created_by' => 1,
      'updated_by' => 1
    ));

  }

}