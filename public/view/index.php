<!DOCTYPE html>
<html ng-app="app">
<head>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <script src="packages/bower_components/angular/angular.js"></script>
  <script src="packages/bower_components/angular-animate/angular-animate.js"></script>
  <script src="packages/bower_components/hammerjs/hammer.js"></script>
  <script src="packages/bower_components/angular-material/angular-material.js"></script>
  <script src="packages/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
  <script src="packages/bower_components/angular-aria/angular-aria.js"></script>
  <link rel="stylesheet" href="packages/bower_components/angular-material/angular-material.css">


  <script type="text/javascript" src="http://cdn.jsdelivr.net/restangular/latest/restangular.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/lodash/2.1.0/lodash.compat.min.js"></script>
  <script type="text/javascript" src="view/app.js"></script>
  <script type="text/javascript" src="view/manage/admin/main.js"></script>
  <script type="text/javascript" src="view/manage/service-provider/main.js"></script>
  <script type="text/javascript" src="view/manage/customer/main.js"></script>
  <script type="text/javascript" src="view/manage/login/main.js"></script>
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

</head>

<body>
<div ng-controller="AppCtrl">
  <div ui-view="main" ng-show="userId"></div>
  <div ui-view="login" ng-hide="userId"></div>
</div>
</body>
</html>
