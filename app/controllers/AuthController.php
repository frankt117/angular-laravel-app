<?php

class AuthController extends BaseController
{
  public function login ()
  {
    $email = Input::get('email');
    $password = Input::get('password');

    //$response = Auth::attempt(array('email' => 'sp2@gmail.com', 'password' => 'SP2'));

    $user = User::where('email', $email, 'AND')->where('password', $password)->get()->first();

    if ( $user ) {
      return $user->category;
    } else {
      return "FALSE";
    }
  }

  public function logout ()
  {
    Auth::logout();
    return 'user logged out';
  }
}