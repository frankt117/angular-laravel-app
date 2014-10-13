angular.module( 'app.new-user', ['app.new-user-service-provider', 'app.new-user-customer'])

  .directive('newUserForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/main.html',
      controller: function($scope) {
        $scope.category = $scope.$parent.user.userCategory;

        $scope.isCategory = function isCategory(cat) {
          return $scope.category === cat;
        }

      },
      controllerAs: 'newUserMainCtrl'
    }
  })
;