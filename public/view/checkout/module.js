angular.module( 'app.checkout', ['angularLoad', 'angularPayments', 'app.oauth-service'])

  .directive('paymentForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/checkout/payment-form.html',
      controller: function($scope, angularLoad, OauthService, $window) {
        this.loaded = false;
        this.trim = $scope.trimTableCtrl.getSelectedTrim();
        this.price = this.trim.price.toFixed(2);
        $scope.name = '';
        $scope.address_line1 = '';
        console.log(this.trim);

        OauthService.getTokenByUserId(this.trim.user_id)
          .success(function(data, header) {
            $scope.paymentFormCtrl.token = data;
            console.log(data);

            angularLoad.loadScript('https://js.stripe.com/v2/').then(function() {
              console.log("STRIPE LOADED!!");
              console.log("KEY = "+$scope.paymentFormCtrl.token.publishable_key);
              $window.Stripe.setPublishableKey($scope.paymentFormCtrl.token.publishable_key);
              console.log("KEY SET");
              $scope.paymentFormCtrl.loaded = true;
            }).catch(function() {
                console.log("STRIPE FAILED");
            });


          })
          .error(function(data, header) {

          });


        $scope.stripeCallback = function (code, result) {
          if (result.error) {
            console.log('it failed! error: ' + result.error.message);
          } else {
            console.log('success! token: ' + result.id);
            console.log(code);
          }
        };

      },
      controllerAs: 'paymentFormCtrl'
    }
  })











;