<?php

class ServiceCategoryController extends \BaseController {

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

      $categories = ServiceCategory::all($select);

      $response = $categories;
    } else {
      $categories = ServiceCategory::get();

      $response = $categories;
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
    ServiceCategory::destroy($id);

    return Response::json(array('success' => true));
  }


}
