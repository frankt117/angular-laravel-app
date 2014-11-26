<?php

class Negotiation extends Eloquent
{

  protected $fillable = array('code', 'sequence', 'type', 'trim_id', 'from_company_id', 'to_company_id', 'comment', 'sample_package_id', 'respond_to_email_id',
                              'target_to_email_id', 'mail_text', 'mail_subject', 'responded_flag', 'created_by', 'updated_by');

}