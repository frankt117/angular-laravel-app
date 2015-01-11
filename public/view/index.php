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
  <link rel='stylesheet' href='packages/bower_components/semantic/dist/components/checkbox.min.css'>
  <script src='packages/bower_components/semantic/dist/components/checkbox.min.js'></script>
  <script src="packages/bower_components/angular-load/angular-load.js"></script>
  <script src="packages/bower_components/angular-payments/lib/angular-payments.js"></script>
  <link href='http://fonts.googleapis.com/css?family=Lato:400,700,900' rel='stylesheet' type='text/css'>


  <script type="text/javascript" src="http://cdn.jsdelivr.net/restangular/latest/restangular.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/lodash/2.1.0/lodash.compat.min.js"></script>
  <script type="text/javascript" src="dist/all.js"></script>


  <!--Bootstrap-->
  <script src="packages/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="packages/bootstrap/bootstrap.css">
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap.js"></script>
  <script src="packages/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>

  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

</head>

<style>
  html, body {
    max-width: 100%;
    overflow-x: hidden;
    background-color: #f8f8f8;
  }
  .logo-bold {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: #FFFFFF;
  }
  .logo-medium {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
  }
</style>

<body>
<div ng-controller="AppCtrl">
  <div ui-view="manage-main" ng-show="loggedIn"></div>
  <div ui-view="manage-login" ng-hide="loggedIn"></div>
  <div ui-view="landing-main"></div>
  <div ui-view="main"></div>
  <div ui-view="main-search-by-category"></div>
  <div ui-view="info"></div>
  <div ui-view></div>
</div>
</body>
</html>
