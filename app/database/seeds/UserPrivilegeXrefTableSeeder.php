<?php

class UserPrivilegeXrefTableSeeder extends Seeder
{
  public function run() {
    DB::table('user_privilege_xrefs')->delete();

    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 1
    ));

    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 2
    ));

    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 3
    ));



    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 20
    ));


    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 21
    ));

    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 22
    ));



    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 100
    ));

    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 101
    ));


    UserPrivilegeXref::create(array(
      'userId' => 1,
      'privilegeId' => 102
    ));




    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 1
    ));

    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 2
    ));

    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 3
    ));



    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 20
    ));


    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 21
    ));

    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 22
    ));



    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 100
    ));

    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 101
    ));


    UserPrivilegeXref::create(array(
      'userId' => 2,
      'privilegeId' => 102
    ));




    UserPrivilegeXref::create(array(
      'userId' => 3,
      'privilegeId' => 100
    ));

    UserPrivilegeXref::create(array(
      'userId' => 3,
      'privilegeId' => 101
    ));


    UserPrivilegeXref::create(array(
      'userId' => 3,
      'privilegeId' => 102
    ));







    UserPrivilegeXref::create(array(
      'userId' => 4,
      'privilegeId' => 100
    ));

    UserPrivilegeXref::create(array(
      'userId' => 4,
      'privilegeId' => 101
    ));


    UserPrivilegeXref::create(array(
      'userId' => 4,
      'privilegeId' => 102
    ));



  }

}