<?php

class Image extends Eloquent
{

  protected $fillable = array('title', 'description', 'sequence', 'path', 'package_id', 'effective_from', 'effective_to');

}