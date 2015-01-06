angular.module( 'app.new-user-customer', ['app.users-service'])

  .directive('newUserCustomerForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/customer.html',
      controller: ["$scope", "UsersService", function($scope, UsersService) {
        this.email = '';
        this.password = '';
        this.zipCode = '';


        this.submit = function() {

          var userObj = {'email' : this.email, 'password' : this.password, 'zip_code' : this.zipCode};

          UsersService.createNewUserCustomer(userObj)
            .success(function(data, header) {
              $scope.addLoginAlert('NEW_USER_SUCCESS');
            })
            .error(function(data, header){
              $scope.addCustomLoginAlert('ERROR', data);
            });


        }

      }],
      controllerAs: 'newUserCustomerCtrl'
    }
  })
;