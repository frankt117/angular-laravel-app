<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('negotiations', function(Blueprint $table)
		{
			$table->increments('id');
      $table->char('code', 30);
      $table->integer('sequence');
      $table->char('type', 1);
      $table->integer('trim_id');
      $table->integer('from_company_id');
      $table->integer('to_company_id');
      $table->text('comment');
      $table->integer('sample_package_id');
      $table->char('respond_to_email_id');
      $table->char('target_to_email_id');
      $table->text('mail_text');
      $table->string('mail_subject');
      $table->boolean('responded_flag');
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
		Schema::drop('negotiations');
	}

}
