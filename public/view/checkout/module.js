angular.module( 'app.checkout', ['angularLoad', 'angularPayments'])

  .directive('paymentForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/checkout/payment-form.html',
      controller: function($scope, angularLoad) {
        this.loaded = false;
        angularLoad.loadScript('https://js.stripe.com/v2/').then(function() {
          console.log("STRIPE LOADED!!");
          $scope.paymentFormCtrl.loaded = true;
        }).catch(function() {
          console.log("STRIPE FAILED");
        });

      },
      controllerAs: 'paymentFormCtrl'
    }
  })











;