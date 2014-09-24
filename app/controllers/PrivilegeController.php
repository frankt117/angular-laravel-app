<?php

class PrivilegeController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $privileges = Privilege::get();

    $privArr = [];

    $visitedModules = [];

    foreach($privileges as $privilege) {
      $module = Module::where('id', $privilege->module_id)->first();
      $privilege = PrivilegeType::where('id', $privilege->privilege_type_id)->first();

      if (!in_array($module->id, $visitedModules)) {
        $privArr[$module->id] = array("name" => $module->name, "id" => $module->id, "types" => array($privilege->id => array("name" => $privilege->name, "id" => $privilege->id)));
        $visitedModules[] = $module->id;
      } else {
        $privArr[$module->id]["types"][$privilege->id] = array("name" => $privilege->name, "id" => $privilege->id);
      }
    }

    $response = [];

    foreach ($privArr as $arr) {
      $response[] = $arr;
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
    Privilege::destroy($id);

    return Response::json(array('success' => true));
  }


}
