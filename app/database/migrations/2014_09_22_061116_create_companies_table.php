<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('companies', function(Blueprint $table)
		{
      $table->increments('id');
      $table->integer('primary_user_id');
      $table->char('code', 8);
      $table->string('name');
      $table->string('address_1');
      $table->string('address_2');
      $table->char('city', 30);
      $table->char('state', 30);
      $table->char('country', 30);
      $table->char('zip_code', 30);
      $table->char('primary_contact_name', 30);
      $table->char('primary_contact_email_id', 60);
      $table->char('primary_contact_phone_no_office', 30);
      $table->char('primary_contact_phone_no_cell', 30);
      $table->char('secondary_contact_name', 30);
      $table->char('secondary_contact_email_id', 60);
      $table->char('secondary_contact_phone_no_office', 30);
      $table->char('secondary_contact_phone_no_cell', 30);
      $table->date('effective_from');
      $table->date('effective_to');
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
		Schema::drop('companies');
	}

}
