<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrimsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('trims', function(Blueprint $table)
		{
			$table->increments('id');
      $table->char('name', 30);
      $table->string('comment');
      $table->float('price');
      $table->char('currency', 10);
      $table->integer('user_id');
      $table->integer('package_id');
      $table->integer('sequence');
      $table->integer('market_id');
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
		Schema::drop('trims');
	}

}
