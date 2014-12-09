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
      $wheres = json_decode(Input::get('where'));

      if ($wheres) {
        $categories = ServiceCategory::where('code', $wheres->code)->first();

        $response = $categories;
      } else {
        $categories = ServiceCategory::get();

        $response = $categories;
      }
    }


    return Response::json($response);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $id
   * @return Response
   */
  public function show($name)
  {
    $categories = ServiceCategory::where('name', $name)->first();

    $response = $categories;

    return Response::json($response);
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
