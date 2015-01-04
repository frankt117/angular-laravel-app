angular.module( 'app.manage-customer', [
    'ui.router',
    'app.login',
    'app.negotiations-service'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider
      .state( 'customer', {
        url: '/manage/customer',
        views: {
          "manage-main": {
            controller: 'MainCustomerCtrl',
            templateUrl: 'view/manage/customer/main.html'
          },
          "manage-login": {
            controller: 'LoginCtrl',
            templateUrl: 'view/manage/login/main.html'
          }
        }
      })

      .state('customer.packages', {
        url: '/packages',
        resolve: {

        },
        controller: function($scope, PackagesService) {

        },
        controllerAs: 'customerPackagesCtrl',
        template: '<h1>PACKAGES</h1>'
      })

      .state('customer.negotiations', {
        url: '/negotiations',
        resolve: {

        },
        controller: function($scope, NegotiationsService) {
          console.log('CUSTOMER NEGOTIATION CTRL');

        },
        controllerAs: 'customerNegotiationsCtrl',
        templateUrl: 'view/negotiate/controllers/customer-negotiations.html'
      })

      .state('customer.negotiations.received', {
        url: '/received',
        resolve: {

        },
        controller: function($scope, NegotiationsService) {
          console.log('CUSTOMER NEGOTIATION RECEIVED CTRL');
          console.log(sessionStorage['userId']);
          this.negotiations = [];

          NegotiationsService.getNegotiationsByTargetEmail(sessionStorage['userId'])
            .success(function(data, status) {
              console.log(data);
              $scope.customerNegotiationsSentCtrl.negotiations = data;
            })
            .error(function(data, status) {
              console.log('FAIL');
              console.log(data);
            });

        },
        controllerAs: 'customerNegotiationsSentCtrl',
        templateUrl: 'view/negotiate/controllers/customer-negotiations-sent.html'
      })

      .state('customer.negotiations.sent', {
        url: '/sent',
        resolve: {

        },
        controller: function($scope, NegotiationsService) {
          console.log('CUSTOMER NEGOTIATION SENT CTRL');
          console.log(sessionStorage['userId']);
          this.negotiations = [];

          NegotiationsService.getNegotiationsByRespondEmail(sessionStorage['userId'])
            .success(function(data, status) {
              console.log(data);
              $scope.customerNegotiationsSentCtrl.negotiations = data;
            })
            .error(function(data, status) {
              console.log('FAIL');
              console.log(data);
            });

        },
        controllerAs: 'customerNegotiationsSentCtrl',
        templateUrl: 'view/negotiate/controllers/customer-negotiations-sent.html'
      })

      .state('customer.negotiations.respond', {
        url: '/respond/:initial_id',
        resolve: {

        },
        controller: function($scope, NegotiationsService, $stateParams) {
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
        },
        controllerAs: 'customerResponseCtrl',
        templateUrl: 'view/negotiate/controllers/customer-response-admin.html'
      })

//      .state( 'customer.negotiations-response', {
//        url: '/negotiation-response/:initial_id',
//
//
//
//      })


  })

  .controller( 'MainCustomerCtrl', function MainCustomerCtrl( $scope ) {
    sessionStorage.newUserCategory = 'customer';

    if(sessionStorage.loggedIn == "true" && (sessionStorage.userCategory != 'customer' || sessionStorage.userCategory != 'CUSTOMER')) {

      switch (sessionStorage.userCategory) {
        case 'company':
          window.location = "#/manage/admin";
          break;
        case "service_provider":
          window.location =  "#/manage/service-provider";
          break;
        case 'customer':
          window.location =  "#/manage/customer";
          break;
        case 'CUSTOMER':
          window.location =  "#/manage/customer";
          break;
        default :
          window.location = "#/index";
      }

    }
  })

;