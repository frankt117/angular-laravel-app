<?php

class AuthController extends BaseController
{
  public function login ()
  {
    $email = Input::get('email');
    $password = Input::get('password');

    if ( Auth::attempt(array('email' => $email, 'password' => $password)) ) {
      $user = Auth::user();
      return $user->category;
    } else {
      return "FALSE";
    }
  }

  public function getLoggedIn ()
  {
    return Response::json(Auth::id());
  }

  public function logout ()
  {
    Auth::logout();
    return 'user logged out';
  }
}