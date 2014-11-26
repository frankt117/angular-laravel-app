<?php

class BillingController extends BaseController
{
  public function charge ()
  {
    $token = Input::get('token');
    $userId = Input::get('user_id');
    $price = Input::get('price');

    $tokens = Token::where('user_id', $userId)->get();

    if(!empty($tokens[0])) {
      // Create the charge on Stripe's servers - this will charge the user's card
      $charge = Stripe_Charge::create(array(
          "amount" => 100, // amount incents
          "currency" => "usd",
          "card" => $token,
          "description" => "test",
          "application_fee" => 123 // amount incents
        ),
        $tokens[0]->access_token // user's access token from the Stripe Connect flow
      );

      $response = Response::json($charge);
    } else {
      $response = Response::json("false");
    }







    return Response::json($response);
  }


}