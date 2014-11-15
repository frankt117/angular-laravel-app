<?php

class UserController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $userEmployee = UserEmployee::get()->toArray();
    $userCustomer = UserCustomer::get()->toArray();
    $userServiceProvider = UserServiceProvider::get()->toArray();

    $return = array_merge($userEmployee, $userCustomer, $userServiceProvider);

    return Response::json($return);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $id
   * @return Response
   */
  public function show($email)
  {
    $user = User::where('email', $email)->get();

    return Response::json($user);
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
    User::destroy($id);

    return Response::json(array('success' => true));
  }


}
