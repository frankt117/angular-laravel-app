<?php

class AuthController extends BaseController
{
  public function login ()
  {
    $email = Input::get('email');
    $password = Input::get('password');

    $response = Auth::attempt(array('email' => 'sp2@gmail.com', 'password' => 'SP2'));

    return Response::json($response);
//    } else {
//      return 'invalid username/pass combo';
//    }
  }

  public function logout ()
  {
    Auth::logout();
    return 'user logged out';
  }
}