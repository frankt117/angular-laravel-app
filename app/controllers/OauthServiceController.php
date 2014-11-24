<?php

class OauthServiceController extends BaseController
{
  public function getAccessToken ()
  {

    $code = Input::get('code');


    //$code = $_GET['code'];

    $token_request_body = array(
      'client_secret' => 'sk_test_pX5SorEzOqZ1VYXvGwDU1U3M',
      'grant_type' => 'authorization_code',
      'code' => $code
    );

    $req = curl_init('https://connect.stripe.com/oauth/token');
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($req, CURLOPT_POST, true );
    curl_setopt($req, CURLOPT_POSTFIELDS, http_build_query($token_request_body));

    // TODO: Additional error handling
    $respCode = curl_getinfo($req, CURLINFO_HTTP_CODE);
    $resp = curl_exec($req);
    curl_close($req);

    //echo $resp['access_token'];

    echo "AUTH TOKEN : <br>";


    if(Auth::check()) {
      $this->print_pre(Auth::user());
    } else {
      echo "NO USER";
    }








    return $resp;
  }


}