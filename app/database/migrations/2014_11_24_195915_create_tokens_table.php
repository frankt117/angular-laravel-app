<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTokensTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tokens', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('user_id');
      $table->string('category');
      $table->string('access_token');
      $table->boolean('live_mode');
      $table->string('refresh_token');
      $table->string('type');
      $table->string('publishable_key');
      $table->string('api_user_id');
      $table->string('scope');
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
		Schema::drop('tokens');
	}

}
