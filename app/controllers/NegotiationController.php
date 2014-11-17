<?php

class NegotiationController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $wheres = json_decode(Input::get('where'));

    if ($wheres) {

      $negotiations = Negotiation::where('trim_id', $wheres->trim_id)->get();

      $response = $negotiations;
    } else {
      $negotiations = Negotiation::get();

      $response = $negotiations;
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
    Negotiation::destroy($id);

    return Response::json(array('success' => true));
  }


}
