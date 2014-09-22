<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserServiceProvidersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_service_providers', function(Blueprint $table)
		{
      $table->integer('user_id');
      $table->string('name');
      $table->string('work_address');
      $table->string('work_city');
      $table->char('work_state', 2);
      $table->integer('work_zip');
      $table->string('billing_address');
      $table->string('billing_city');
      $table->char('billing_state', 2);
      $table->integer('billing_zip');
      $table->string('phone');
      $table->integer('company_id');
      $table->string('designation');
      $table->integer('created_by');
      $table->integer('updated_by');
      $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('user_service_providers');
	}

}
