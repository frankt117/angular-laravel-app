<?php

class TokenController extends \BaseController {


  public function addToUser()
  {
    $email = Input::get('user_id');
    $tokenId = Input::get('token_id');

    $user = User::where('email', $email)->get();
    $tokens = Token::where('id', $tokenId)->get();
    $token = $tokens[0];
    $token->user_id = $user[0]->id;
    $token->created_by = $user[0]->id;
    $token->updated_by = $user[0]->id;
    $token->save();

    return Response::json($token);
  }


}
