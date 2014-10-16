angular.module( 'app.nav-bar', [])

  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/navigation/nav-bar.html',
      controller: function($scope) {

         $scope.logOff = function() {
          console.log('LOGGING OFF');
           sessionStorage.clear();
           location.reload();
        };
      },
      controllerAs: 'navBarCtrl'
    }
  })
;