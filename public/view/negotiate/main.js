angular.module( 'app.negotiate-page', [
    'ui.router',
    'app.negotiations-service'
  ])

  .config(["$stateProvider", function config( $stateProvider ) {

    $stateProvider
      .state( 'negotiate-page', {
        url: '/app/negotiate/sp_response/:initial_id',
        views: {
          "landing-main": {
            controller: ["$scope", "NegotiationsService", "$stateParams", function($scope, NegotiationsService, $stateParams) {
              this.negotiations = [];
              this.spResponse = '';
              this.spPrice = '';

              NegotiationsService.getNegotiationsByInitialId($stateParams['initial_id'])
                .success(function(data, status, header) {
                  console.log(data);
                  $scope.spResponseCtrl.negotiations = data;
                })
                .error(function(data, status, header) {
                  console.log('FAIL');
                });

              this.submit = function() {
                console.log("WORKING");
                console.log(this.spResponse);
                console.log(this.spPrice);

                var obj = {'from_sp' : true, 'initial_id' : this.negotiations[0].initial_id, 'mail_text' : this.spResponse, 'proposed_price' : this.spPrice};

                console.log('SUBMITTING SP REPSONSE!!');
                console.log(obj);

                NegotiationsService.createNegotiation(obj)
                  .success(function(data, status) {
                    console.log(data);
                    $scope.spResponseCtrl.negotiations.push(data);
                  })
                  .error(function(data, status) {
                    console.log("FAIL");
                  });
              }
            }],
            controllerAs: 'spResponseCtrl',
            templateUrl: 'view/negotiate/sp_response.html'
          }
        }
      })

      .state( 'negotiate-page-customer', {
        url: '/app/negotiate/customer_response/:initial_id',
        views: {
          "": {
            controller: ["$scope", "NegotiationsService", "$stateParams", function($scope, NegotiationsService, $stateParams) {
              this.negotiations = [];
              this.spResponse = '';
              this.spPrice = '';

              NegotiationsService.getNegotiationsByInitialId($stateParams['initial_id'])
                .success(function(data, status, header) {
                  console.log(data);
                  $scope.customerResponseCtrl.negotiations = data;
                })
                .error(function(data, status, header) {
                  console.log('FAIL');
                });

              this.submit = function() {
                console.log("WORKING");
                console.log(this.spResponse);
                console.log(this.spPrice);

                var obj = {'from_sp' : false, 'initial_id' : this.negotiations[0].initial_id, 'mail_text' : this.spResponse};

                console.log('SUBMITTING CUSTOMER REPSONSE!!');
                console.log(obj);

                NegotiationsService.createNegotiation(obj)
                  .success(function(data, status) {
                    console.log(data);
                    $scope.customerResponseCtrl.negotiations.push(data);
                  })
                  .error(function(data, status) {
                    console.log("FAIL");
                  });
              }
            }],
            controllerAs: 'customerResponseCtrl',
            templateUrl: 'view/negotiate/customer_response.html'
          }
        }
      })

  }])
;