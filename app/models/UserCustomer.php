<?php

class UserCustomer extends Eloquent
{

  protected $fillable = array('user_id', 'name', 'primary_address', 'primary_city', 'primary_state',
    'primary_zip', 'billing_address', 'billing_city', 'billing_state', 'billing_zip', 'created_by', 'updated_by');

}