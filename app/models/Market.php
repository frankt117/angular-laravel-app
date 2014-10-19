<?php

class Market extends Eloquent
{

  protected $fillable = array('code', 'name', 'city', 'state', 'country', 'effective_from', 'effective_to');

}