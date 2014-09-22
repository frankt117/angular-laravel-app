<?php

class Privilege extends Eloquent
{

  protected $fillable = array('user_id', 'module_id', 'privilege_type_id', 'created_by', 'updated_by');

}