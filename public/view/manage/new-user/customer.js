angular.module( 'app.new-user-customer', [])

  .directive('newUserCustomerForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/manage/new-user/customer.html',
      controller: function($scope) {

      },
      controllerAs: 'newUserCustomerCtrl'
    }
  })
;