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

		$this->call('UserTableSeeder');
    $this->command->info('Comments table seeded');

    $this->call('PrivilegeTableSeeder');
    $this->command->info('Privileges table seeded');

    $this->call('CompanyTableSeeder');
    $this->command->info('Companys table seeded');

    $this->call('ModuleTableSeeder');
    $this->command->info('Modules table seeded');

    $this->call('PrivilegeTypeTableSeeder');
    $this->command->info('PrivilegeTypes table seeded');

    $this->call('UserCompanyTableSeeder');
    $this->command->info('UserCompanys table seeded');

    $this->call('UserServiceProviderTableSeeder');
    $this->command->info('UserServices table seeded');

    $this->call('UserCustomerTableSeeder');
    $this->command->info('UserCustomers table seeded');

    $this->call('MarketTableSeeder');
    $this->command->info('Markets table seeded');

    $this->call('ServiceCategoryTableSeeder');
    $this->command->info('Service Category table seeded');

	}

}
