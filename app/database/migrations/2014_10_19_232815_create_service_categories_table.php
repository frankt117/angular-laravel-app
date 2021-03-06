<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceCategoriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('service_categories', function(Blueprint $table)
		{
			$table->increments('id');
			$table->char('code', 8);
      $table->char('name', 50);
      $table->string('description');
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
		Schema::drop('service_categories');
	}

}
