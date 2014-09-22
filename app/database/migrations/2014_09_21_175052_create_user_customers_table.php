<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCustomersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_customers', function(Blueprint $table)
		{
			$table->integer('user_id');
      $table->string('name');
      $table->string('primary_address');
      $table->string('primary_city');
      $table->char('primary_state', 2);
      $table->integer('primary_zip');
      $table->string('billing_address');
      $table->string('billing_city');
      $table->char('billing_state', 2);
      $table->integer('billing_zip');
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
		Schema::drop('user_customers');
	}

}
