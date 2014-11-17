<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserEmployeesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_employees', function(Blueprint $table)
		{
      $table->integer('user_id');
      $table->integer('company_id');
      $table->char('code', 8);
      $table->string('name');
      $table->string('work_address');
      $table->string('work_city');
      $table->char('work_state', 30);
      $table->char('work_country', 30);
      $table->integer('work_zip');
      $table->string('phone');
      $table->string('nick_name', 8);
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
		Schema::drop('user_employees');
	}

}
