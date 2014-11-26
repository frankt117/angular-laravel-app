<?php

class CompanyTableSeeder extends Seeder
{
  public function run() {
    DB::table('companies')->delete();

    Company::create(array(
      'primary_user_id' => 1,
      'code' => 'ADMIN',
      'name' => 'Installation Exchange',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Hemanth Thakore',
      'primary_contact_email_id' => 'installationexchange.com@gmail.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => 'Atul Srivastav',
      'secondary_contact_email_id' => 'atuldhanraj@gmail.com',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 1,
      'updated_by' => 1
    ));


    Company::create(array(
      'primary_user_id' => 4,
      'code' => 'GENERAL',
      'name' => 'DFW Installation Services',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Lincoln Bose',
      'primary_contact_email_id' => 'lincolnbose@gmail.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));

    Company::create(array(
      'primary_user_id' => 5,
      'code' => 'GENERAL',
      'name' => 'North Texas Installations',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Mike Jones',
      'primary_contact_email_id' => 'northtexasinstall@gmail.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));

    Company::create(array(
      'primary_user_id' => 6,
      'code' => 'GENERAL',
      'name' => 'Scrappy Eagle Home Services',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Kenny Buyers',
      'primary_contact_email_id' => 'kenny@scrappyeagle.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));

    Company::create(array(
      'primary_user_id' => 7,
      'code' => 'GENERAL',
      'name' => 'Best Media North Texas',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Derek Akunne',
      'primary_contact_email_id' => 'derek@bestmedianorthtexas.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));

    Company::create(array(
      'primary_user_id' => 8,
      'code' => 'GENERAL',
      'name' => 'DFW Electronics',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'John Chelf',
      'primary_contact_email_id' => 'chelf83eagle@hotmail.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));

    Company::create(array(
      'primary_user_id' => 9,
      'code' => 'GENERAL',
      'name' => 'HighTek Automations',
      'address_1' => '',
      'address_2' => '',
      'city' => 'Plano',
      'state' => 'Texas',
      'zip_code' => '75025',
      'primary_contact_name' => 'Dajon Williams',
      'primary_contact_email_id' => 'd2legit@hightekauto.com',
      'primary_contact_phone_no_office' => '',
      'primary_contact_phone_no_cell' => '',
      'secondary_contact_name' => '',
      'secondary_contact_email_id' => '',
      'secondary_contact_phone_no_office' => '',
      'secondary_contact_phone_no_cell' => '',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
      'created_by' => 4,
      'updated_by' => 4
    ));


  }

}