<?php

class UserCompanyController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    return Response::json(UserCompany::get());
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
    UserCompany::destroy($id);

    return Response::json(array('success' => true));
  }


}
