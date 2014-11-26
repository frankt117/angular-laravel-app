<?php

class Token extends Eloquent
{

  protected $fillable = array('user_id', 'category', 'access_token', 'live_mode', 'refresh_token', 'type', 'publishable_key', 'api_user_id', 'scope', 'created_by', 'updated_by');

}