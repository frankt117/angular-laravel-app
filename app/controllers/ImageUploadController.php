<?php

class ImageUploadController extends \BaseController {

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store()
  {
    $file = Input::file('file'); // your file upload input field in the form should be named 'file'

    $rules = array(
      'image' => 'required|mimes:png,gif,jpeg,jpg |max:20000'
    );

    $validator = Validator::make( array('image'=> $file) , $rules);

    if($validator->passes())
    {
      $path = public_path()."/images/upload/";

      $name = time()."_".Input::file('file')->getClientOriginalName();

      $file->move($path,$name);

      return $name;
    }

    return false;

  }



}
