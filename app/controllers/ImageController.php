<?php

class ImageController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
//    $image = Image::get();
//
//    $response = $image;
//
//    return Response::json($response);

    $wheres = json_decode(Input::get('where'));

    if ($wheres) {

      $images = Image::where('package_id', $wheres->package_id)->get();

      $response = $images;
    } else {
      $images = Image::get();

      $response = $images;
    }

    return Response::json($response);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $id
   * @return Response
   */
  public function show($id)
  {

  }


  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store()
  {
    $data = Input::all();

    if ( !empty($data['id']) ) {
      $image = Image::where('id', $data['id'])->first();

      if (!empty($image)) {
        $image->fill($data);
        $image->save();
      } else {
        $image = "There was an issue please try again.";
      }
    } else {
      $image = Image::create($data);
    }


    return $image;
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    Image::destroy($id);

    return Response::json(array('success' => true));
  }


}
