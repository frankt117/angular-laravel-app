<!DOCTYPE html>
<html ng-app="app">
<head>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="packages/bower_components/angular/angular.js"></script>
  <script src="packages/bower_components/angular-animate/angular-animate.js"></script>
  <script src="packages/bower_components/angular-ui-router/release/angular-ui-router.js"></script>


  <script type="text/javascript" src="http://cdn.jsdelivr.net/restangular/latest/restangular.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/lodash/2.1.0/lodash.compat.min.js"></script>
  <script type="text/javascript" src="view/app.js"></script>
  <script type="text/javascript" src="view/privileges/privileges-2.js"></script>
  <script type="text/javascript" src="view/landing/main.js"></script>
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


  <!--Bootstrap-->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap.js"></script>
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>

</head>

<style>
  body{
    background-color: #f7f7f7;
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
