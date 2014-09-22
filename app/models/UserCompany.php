<?php

class UserCompany extends Eloquent
{

  protected $fillable = array('user_id', 'name', 'work_address', 'work_city', 'work_state',
    'work_zip', 'phone', 'department', 'created_by', 'updated_by');

}