<?php

class Trim extends Eloquent
{

  protected $fillable = array('name', 'comment', 'price', 'currency', 'sequence', 'user_id', 'package_id', 'market_id', 'effective_from', 'effective_to');

}