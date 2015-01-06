angular.module( 'app.nav-bar', [])

  .directive('navBarManage', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar-manage.html',
      controller: ["$scope", function($scope) {

        $scope.logOff = function() {
          console.log('LOGGING OFF');
          sessionStorage.clear();
          location.reload();
        };
      }],
      controllerAs: 'navBarCtrl'
    }
  })

  .directive('navBarManageCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar-manage-customer.html',
      controller: ["$scope", function($scope) {

        $scope.logOff = function() {
          console.log('LOGGING OFF');
          sessionStorage.clear();
          location.reload();
        };
      }],
      controllerAs: 'navBarCtrl'
    }
  })

  .directive('navBarServiceProvider', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar-service-provider.html',
      controller: ["$scope", function($scope) {

        $scope.logOff = function() {
          console.log('LOGGING OFF');
          sessionStorage.clear();
          location.reload();
        };
      }],
      controllerAs: 'navBarCtrl'
    }
  })

  .directive('navBarLogin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar-login.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'navBarCtrl'
    }
  })


  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'navBarCtrl'
    }
  })

  .directive('navBar2', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar-2.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'navBar2Ctrl'
    }
  })


  .directive('topNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/top-nav.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'topNavCtrl'
    }
  })
;