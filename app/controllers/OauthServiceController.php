<?php

class OauthServiceController extends BaseController
{
  public function getAccessToken ()
  {

    $code = Input::get('code');

    $token_request_body = array(
      'client_secret' => 'sk_test_pX5SorEzOqZ1VYXvGwDU1U3M',
      'grant_type' => 'authorization_code',
      'code' => $code
    );

    $req = curl_init('https://connect.stripe.com/oauth/token');
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($req, CURLOPT_POST, true );
    curl_setopt($req, CURLOPT_POSTFIELDS, http_build_query($token_request_body));

    $respCode = curl_getinfo($req, CURLINFO_HTTP_CODE);
    $resp = json_decode(curl_exec($req));
    curl_close($req);


    $token = new Token();
    $token->category = 'STRP';
    $token->access_token = $resp->access_token;
    $token->live_mode = $resp->livemode;
    $token->refresh_token = $resp->refresh_token;
    $token->type = $resp->token_type;
    $token->publishable_key = $resp->stripe_publishable_key;
    $token->api_user_id = $resp->stripe_user_id;
    $token->scope = $resp->scope;
    $token->save();


    return Redirect::to('http://getmepro.com/#/manage/service-provider/oauth/'.$token->id);
  }


}