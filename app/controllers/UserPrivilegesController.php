<?php

class UserPrivilegesController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index($userId)
  {
    $input = Input::all();
    //$this->print_pre($input);
    $privileges = Privilege::where('user_id', $userId)
      ->get();

    return Response::json($privileges);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $userId
   * * @param  int  $privilegeTypeId
   * @return Response
   */
  public function show($userId, $privilegeTypeId)
  {
    $privileges = Privilege::where('user_id', $userId)
      ->where('privilege_type_id', $privilegeTypeId)
      ->get();

    return Response::json($privileges);
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

  }


}
