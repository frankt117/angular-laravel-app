<?php

class TrimController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $wheres = json_decode(Input::get('where'));

    if ($wheres) {

      $trims = Trim::where('package_id', $wheres->package_id)->orderBy('price', 'ASC')->get();

      $response = $trims;
    } else {
      $trims = Trim::get();

      $response = $trims;
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

    $trim = Trim::create($data);

    return Response::json($trim);
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    Trim::destroy($id);

    return Response::json(array('success' => true));
  }


}
