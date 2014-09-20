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
    $this->command->info('Comment table seeded');

    $this->call('PrivilegeTableSeeder');
    $this->command->info('Privilege table seeded');

    $this->call('UserPrivilegeXrefTableSeeder');
    $this->command->info('UserPrivilegeXref table seeded');
	}

}
