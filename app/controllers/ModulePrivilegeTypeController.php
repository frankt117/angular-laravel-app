<?php

class ModulePrivilegeTypeController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index($moduleId)
  {
    $response = Privilege::where('module_id', $moduleId)->distinct()->get(array('privilege_type_id'));

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
    Module::destroy($id);

    return Response::json(array('success' => true));
  }


}
