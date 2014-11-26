<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

    //DB::statement('SET FOREIGN_KEY_CHECKS=0;');

		$this->call('UserTableSeeder');
    $this->command->info('Users table seeded');
//
//    $this->call('PrivilegeTableSeeder');
//    $this->command->info('Privileges table seeded');
//
//    $this->call('CompanyTableSeeder');
//    $this->command->info('Companys table seeded');
//
//    $this->call('ModuleTableSeeder');
//    $this->command->info('Modules table seeded');
//
//    $this->call('PrivilegeTypeTableSeeder');
//    $this->command->info('PrivilegeTypes table seeded');
//
//    $this->call('UserEmployeeTableSeeder');
//    $this->command->info('UserEmployees table seeded');
//
//    $this->call('UserServiceProviderTableSeeder');
//    $this->command->info('UserServices table seeded');
//
//    $this->call('UserCustomerTableSeeder');
//    $this->command->info('UserCustomers table seeded');
//
//    $this->call('MarketTableSeeder');
//    $this->command->info('Markets table seeded');
//
//    $this->call('ServiceCategoryTableSeeder');
//    $this->command->info('Service Category table seeded');
//
//    $this->call('PackageTableSeeder');
//    $this->command->info('Package table seeded');

//    $this->call('ImageTableSeeder');
//    $this->command->info('Image table seeded');

//    $this->call('TrimTableSeeder');
//    $this->command->info('Trim table seeded');

    //DB::statement('SET FOREIGN_KEY_CHECKS=1;');

	}

}
