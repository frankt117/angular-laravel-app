<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrivilegesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('privileges', function(Blueprint $table)
		{
      $table->foreign('user_id')->references('id')->on('users');
      $table->integer('module_id');
      $table->integer('privilege_type_id');
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
		Schema::drop('privileges');
	}

}
