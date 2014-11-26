<?php

class UserEmployee extends Eloquent
{

  protected $fillable = array('user_id', 'company_id', 'code', 'name', 'work_address', 'work_city', 'work_state',
    'work_country', 'work_zip', 'phone', 'nick_name', 'created_by', 'updated_by');

}