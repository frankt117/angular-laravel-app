<?php

class Package extends Eloquent
{

  protected $fillable = array('user_id', 'category_id', 'code', 'name', 'summary', 'description', 'sequence', 'effective_from', 'effective_to');

}