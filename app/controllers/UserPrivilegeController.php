<?php

class UserPrivilegeController extends \BaseController {

  /**
   * Display all privileges by userId.
   *
   * @return Response
   */
  public function index($userId)
  {
    $privileges = UserPrivilegeXref::where('userId', $userId)->get();

    return Response::json($privileges);
  }

  /**
   * Display a listing of the resource.
   *
   * * @param  int  $id
   * @return Response
   */
  public function show($productId, $commentId)
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

  }


}
