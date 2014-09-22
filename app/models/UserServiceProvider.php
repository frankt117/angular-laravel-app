<?php

class UserServiceProvider extends Eloquent
{

  protected $fillable = array('user_id', 'name', 'work_address', 'work_city', 'work_state',
    'work_zip', 'billing_address', 'billing_city', 'billing_state', 'billing_zip', 'phone', 'company_id', 'designation', 'created_by', 'updated_by');

}