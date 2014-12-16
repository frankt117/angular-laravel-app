angular.module( 'app.info', [])


  .directive('aboutUs', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/about-us.html',
      controller: function($scope) {

      },
      controllerAs: 'aboutUsCtrl'
    }
  })





;