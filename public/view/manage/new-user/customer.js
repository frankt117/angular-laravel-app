angular.module( 'app.new-user-customer', ['app.users-service'])

  .directive('newUserCustomerForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/customer.html',
      controller: function($scope, UsersService) {
        $scope.alert2 = false;
        this.email = '';
        this.password = '';
        this.zipCode = '';


        this.submit = function() {
          console.log("SUBMITTTING NEW CUSTOMER FORM");


          var userObj = {'email' : this.email, 'password' : this.password, 'zip_code' : this.zipCode};

          UsersService.createNewUserCustomer(userObj)
            .success(function(data, header) {

              console.log('SUCCESS');
              console.log(data);
              $scope.newUserAlert = true;
            })
            .error(function(data, header){
              console.log('ERROR');
            });

          console.log(userObj);

        }

      },
      controllerAs: 'newUserCustomerCtrl'
    }
  })
;