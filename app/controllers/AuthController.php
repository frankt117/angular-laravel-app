<?php

class AuthController extends BaseController
{
  public function login ()
  {
    $email = Input::get('email');
    $password = Input::get('password');

    $user = User::where('email', $email, 'AND')->where('password', $password)->get()->first();

    if ( $user ) {
      Auth::login($user);
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