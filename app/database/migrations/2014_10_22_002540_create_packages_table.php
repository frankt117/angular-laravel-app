<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('packages', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->integer('category_id')->unsigned();
      $table->char('code', 8);
      $table->char('name', 60);
      $table->text('description');
      $table->integer('sequence');
      $table->date('effective_from');
      $table->date('effective_to');
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
		Schema::drop('packages');
	}

}
