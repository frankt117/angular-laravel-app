angular.module( 'app.new-user', ['app.new-user-service-provider', 'app.new-user-customer'])

  .directive('newUserForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/main.html',
      controller: function($scope) {
        $scope.category = sessionStorage.userCategory;


        $scope.isCategory = function isCategory(cat) {
          return $scope.category === cat;
        }

        $scope.newUserSuccess = function() {
          $scope.alert2 = true;
        }

      },
      controllerAs: 'newUserMainCtrl'
    }
  })
;