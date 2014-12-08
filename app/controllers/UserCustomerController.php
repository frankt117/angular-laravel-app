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

    $userData = array('email' => $data['email'], 'password' => Hash::make($data['password']), 'category' => 'CUSTOMER', 'effective_from' => date('Y-m-d H:i:s'), 'effective_to' => '',
                  'created_by' => 0, 'updated_by' => 0);

    $user = User::create($userData);

    if(!$user) {
      return Response::json(false);
    }


    $userCustomerData = array('name' => $data['email'], 'primary_address' => '', 'primary_city' => '', 'primary_state' => '',
                          'primary_zip' => $data['zip_code'], 'billing_address' => '', 'billing_city' => '', 'billing_state' => '', 'billing_zip' => '',
                          'created_by' => $user['id'], 'updated_by' => $user['id']);

    $userCustomer = UserCustomer::create($userCustomerData);



    if($userCustomer) {
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
