<?php

class AuthController extends BaseController
{
  public function login ()
  {
    $email = Input::get('email');
    $password = Input::get('password');

    if(Auth::check()) {
      Auth::logout();
    }

    if ( Auth::attempt(array('email' => $email, 'password' => $password), false) ) {
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