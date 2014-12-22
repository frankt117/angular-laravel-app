<?php

class NegotiationController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $wheres = json_decode(Input::get('where'));

    if ($wheres) {

      $negotiations = Negotiation::where('initial_id', $wheres->initial_id)->get();

      $response = $negotiations;
    } else {
      $negotiations = Negotiation::get();

      $response = $negotiations;
    }

    return Response::json($response);
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

    if (!empty($data['initial_id'])) {
      $old_negotiation = Negotiation::where('id', $data['initial_id'])->first();
      $count = count(Negotiation::where('initial_id', $data['initial_id'])->get()->toArray());

      if(!empty($data['from_sp'])) {
        $newDataOriginal = $old_negotiation->toArray();
        $newData = $newDataOriginal;

        unset($newData['id']);
        unset($newData['created_at']);
        unset($newData['created_by']);
        unset($newData['updated_at']);
        unset($newData['updated_by']);
        $newData['respond_to_email_id'] = $newDataOriginal['target_to_email_id'];
        $newData['target_to_email_id'] = $newDataOriginal['respond_to_email_id'];
        $newData['sequence'] = $count+1;
        if(!empty($data['proposed_price'])) {
          $newData['proposed_price'] = $data['proposed_price'];
        }
        $newData['mail_text'] = $data['mail_text'];
        $newData['mail_subject'] = 'GETMPRO.COM - SERVICE PROVIDER RESPONSE';
        $newData['type'] = 'S';
        $newData['code'] = 'SP_RESP';


        $negotiation = Negotiation::create($newData);
      }

    } else {
      // CREATE AN INITIAL NEGOTIATION RECORD
      $trim = Trim::where('id', $data['trim_id'])->first();
      $user = User::where('id', $trim->user_id)->first();

      $data['code'] = 'INIT';
      $data['sequence'] = 1;
      $data['type'] = 'I';
      $data['to_company_id'] = $trim->user_id;
      $data['to_company_id'] = '';
      $data['target_to_email_id'] = $user->email;
      $data['mail_subject'] = 'GETMPRO.COM - CUSTOMER NEGOTIATION';


      $negotiation = Negotiation::create($data);

      $negotiation->initial_id = $negotiation->id;
      $negotiation->save();

      $to = "frankjtorresjr@gmail.com";
      $subject = $data['mail_subject'];
      $txt = "<a href='http://getmepro.com/#/app/negotiate/sp_response/$negotiation->id'>View Message From Customer.</a>";
      $headers = "From: webmaster@getmepro.com" . "\r\n" .
        "CC: installationexchange.com@gmail.com";

      mail($to,$subject,$txt,$headers);
    }



    return $negotiation;
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    Negotiation::destroy($id);

    return Response::json(array('success' => true));
  }


}
