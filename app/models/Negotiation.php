<?php

class Negotiation extends Eloquent
{

  protected $fillable = array('initial_id', 'code', 'sequence', 'type', 'trim_id', 'from_company_id', 'to_company_id', 'comment', 'sample_package_id', 'respond_to_email_id',
                              'target_to_email_id', 'respond_to_phone_number', 'mail_text', 'mail_subject', 'proposed_price', 'responded_flag', 'created_by', 'updated_by');

}