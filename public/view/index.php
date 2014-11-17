<!DOCTYPE html>
<html ng-app="app">
<head>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="packages/bower_components/angular/angular.js"></script>
  <script src="packages/bower_components/angular-animate/angular-animate.js"></script>
  <script src="packages/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
  <script src="packages/bower_components/angular-file-upload/angular-file-upload.js"></script>
  <link rel='stylesheet' href='packages/bower_components/textAngular/src/textAngular.css'>
  <script src='packages/bower_components/textAngular/dist/textAngular-rangy.min.js'></script>
  <script src='packages/bower_components/textAngular/dist/textAngular-sanitize.min.js'></script>
  <script src='packages/bower_components/textAngular/dist/textAngular.min.js'></script>
  <link rel='stylesheet' href='packages/bower_components/semantic/build//minified/definitions/modules/checkbox.min.css'>
  <script src='packages/bower_components/semantic/build/minified/definitions/modules/checkbox.min.js'></script>


  <script type="text/javascript" src="http://cdn.jsdelivr.net/restangular/latest/restangular.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/lodash/2.1.0/lodash.compat.min.js"></script>
  <script type="text/javascript" src="view/app.js"></script>
  <script type="text/javascript" src="view/privileges/privileges-2.js"></script>
  <script type="text/javascript" src="view/landing/main.js"></script>
  <script type="text/javascript" src="view/negotiate/main.js"></script>
  <script type="text/javascript" src="view/manage/admin/main.js"></script>
  <script type="text/javascript" src="view/manage/service-provider/main.js"></script>
  <script type="text/javascript" src="view/manage/customer/main.js"></script>
  <script type="text/javascript" src="view/manage/login/main.js"></script>
  <script type="text/javascript" src="view/manage/login/authService.js"></script>
  <script type="text/javascript" src="view/manage/new-user/main.js"></script>
  <script type="text/javascript" src="view/manage/new-user/service-provider.js"></script>
  <script type="text/javascript" src="view/manage/new-user/customer.js"></script>
  <script type="text/javascript" src="view/manage/navigation/nav-bar.js"></script>
  <script type="text/javascript" src="view/service-categories/module.js"></script>
  <script type="text/javascript" src="view/service-categories/service.js"></script>
  <script type="text/javascript" src="view/markets/module.js"></script>
  <script type="text/javascript" src="view/markets/service.js"></script>
  <script type="text/javascript" src="view/packages/module.js"></script>
  <script type="text/javascript" src="view/packages/service.js"></script>
  <script type="text/javascript" src="view/images/module.js"></script>
  <script type="text/javascript" src="view/images/service.js"></script>
  <script type="text/javascript" src="view/trims/module.js"></script>
  <script type="text/javascript" src="view/trims/service.js"></script>
  <script type="text/javascript" src="view/companies/module.js"></script>
  <script type="text/javascript" src="view/companies/service.js"></script>
  <script type="text/javascript" src="view/negotiate/module.js"></script>
  <script type="text/javascript" src="view/negotiate/service.js"></script>
  <script type="text/javascript" src="view/users/users.js"></script>


  <!--Bootstrap-->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap.js"></script>
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>

</head>

<style>
  body{
    background-color: #fcfcfc;
  }
</style>

<body>
<div ng-controller="AppCtrl">
  <div ui-view="manage-main" ng-show="loggedIn"></div>
  <div ui-view="manage-login" ng-hide="loggedIn"></div>
  <div ui-view="landing-main"></div>
</div>
</body>
</html>
