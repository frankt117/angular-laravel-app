<?php

class ModuleTableSeeder extends Seeder
{
  public function run() {
    DB::table('modules')->delete();

    Module::create(array(
      'name' => 'Privilege Module',
      'created_by' => 1,
      'updated_by' => 1
    ));

    Module::create(array(
      'name' => 'User Module',
      'created_by' => 1,
      'updated_by' => 1
    ));

    Module::create(array(
      'name' => 'Package Module',
      'created_by' => 1,
      'updated_by' => 1
    ));

  }

}