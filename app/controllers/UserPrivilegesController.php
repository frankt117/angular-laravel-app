<?php

class UserPrivilegesController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index($userId)
  {
    //$input = Input::all();
    //$this->print_pre($input);
    $privileges = Privilege::where('user_id', $userId)
      ->get();

    $privArr = [];

    $visitedModules = [];

    foreach($privileges as $privilege) {
      $module = Module::where('id', $privilege->module_id)->first();
      $privilege = PrivilegeType::where('id', $privilege->privilege_type_id)->first();

//      $privArr[] = array("privilege" => array ("module" => array("name" => $module->name, "id" => $module->id),
//                                               "type" => array("name" => $privilege->name, "id" => $privilege->id)));

      if (!in_array($module->id, $visitedModules)) {
        $privArr[$module->id] = array("name" => $module->name, "id" => $module->id, "types" => array($privilege->id => array("name" => $privilege->name, "id" => $privilege->id)));
        $visitedModules[] = $module->id;
      } else {
        $privArr[$module->id]["types"][$privilege->id] = array("name" => $privilege->name, "id" => $privilege->id);
      }
    }

    $repsonse = [];

    foreach ($privArr as $arr) {
      $response[] = $arr;
    }

    //$this->print_pre($response);

    return Response::json($response);
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
