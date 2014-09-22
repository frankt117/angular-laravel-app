<?php

class CompanyTableSeeder extends Seeder
{
  public function run() {
    DB::table('companies')->delete();

    Company::create(array(
      'name' => 'Installation Exchange',
      'code' => '0',
      'created_by' => 1,
      'updated_by' => 1
    ));

    Company::create(array(
      'name' => 'DFW Installation Services',
      'code' => '117',
      'created_by' => 1,
      'updated_by' => 1
    ));

  }

}