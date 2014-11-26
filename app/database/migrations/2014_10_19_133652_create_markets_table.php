<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarketsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('markets', function(Blueprint $table)
		{
			$table->increments('id');
			$table->char('code', 8);
      $table->char('name', 30);
      $table->char('city', 30);
      $table->char('state', 30);
      $table->char('country', 30);
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
		Schema::drop('markets');
	}

}
