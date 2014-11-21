<?php

class UserCustomerController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    return Response::json(UserCustomer::get());
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

    $user = UserCustomer::create($data);

    if($user) {
      $message = true;
    } else {
      $message = false;
    }

    return Response::json($message);
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    UserCustomer::destroy($id);

    return Response::json(array('success' => true));
  }


}
