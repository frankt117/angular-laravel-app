<?php

class UserModulePrivilegeController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index($userId, $moduleId)
  {
    $privileges = Privilege::where('user_id', $userId)
      ->where('module_id', $moduleId)
      ->get();

    return Response::json($privileges);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $userId
   * * @param  int  $moduleId
   * * @param  int  $privilegeTypeId
   * @return Response
   */
  public function show($userId, $moduleId, $privilegeTypeId)
  {
    $response = FALSE;

    $privilege = Privilege::where('user_id', $userId)
      ->where('module_id', $moduleId)
      ->where('privilege_type_id', $privilegeTypeId)
      ->first();


    if ( $privilege ) {
      $response = TRUE;
    }

    return Response::json(array('success' => $response));
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
