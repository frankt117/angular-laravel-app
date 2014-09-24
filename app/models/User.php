<?php

class User extends Eloquent
{

  protected $fillable = array('email', 'password', 'category', 'effective_from', 'effective_to', 'created_by', 'updated_by');

}