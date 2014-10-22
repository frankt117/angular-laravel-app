<?php

class PackageController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $columns = json_decode(Input::get('columns'));

    if ($columns) {
      $select = [];
      foreach ($columns as $column) {
        $select[] = $column;
      }

      $packages = Package::all($select);

      $response = $packages;
    } else {
      $packages = Package::get();

      $response = $packages;
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

  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    Package::destroy($id);

    return Response::json(array('success' => true));
  }


}
