<?php

class ServiceCategory extends Eloquent
{

  protected $fillable = array('code', 'name', 'description', 'sequent', 'effective_from', 'effective_to');

}