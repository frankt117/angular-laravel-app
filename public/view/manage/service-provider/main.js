angular.module( 'app.manage-service-provider', [
    'ui.router',
    'app.login',
    'app.oauth-service'
  ])

  .config(["$stateProvider", function config( $stateProvider ) {
    $stateProvider.state( 'service-provider', {
      url: '/manage/service-provider',
      views: {
        "manage-main": {
          controller: 'MainSPCtrl',
          templateUrl: 'view/manage/service-provider/main.html'
        },
        "manage-login": {
          controller: 'LoginCtrl',
          templateUrl: 'view/manage/login/main.html'
        }
      }
    });

    $stateProvider.state( 'service-provider-oauth', {
      url: '/manage/service-provider/oauth/:token',
      views: {
        "manage-main": {
          controller: 'OauthCtrl',
          templateUrl: 'view/manage/service-provider/oauth.html'
        }
      }
    });
  }])

  .controller( 'MainSPCtrl', ["$scope", "$http", function MainSPCtrl( $scope, $http ) {
    sessionStorage.newUserCategory = 'service_provider';

    if(sessionStorage.loggedIn == "true" && sessionStorage.userCategory != 'service_provider') {

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

    $scope._currentManageView = "PACKAGES";


    $scope.updateManageCurrentView = function(viewNew) {
      $scope._currentManageView = viewNew;
    };

    $scope.getManageCurrentView = function(view) {
      return $scope._currentManageView == view;
    };

  }])

  .controller( 'OauthCtrl', ["$scope", "OauthService", "$http", "$stateParams", function OauthCtrl( $scope, OauthService, $http, $stateParams ) {

    console.log("POST");
    console.log($stateParams['token']);


    OauthService.addToken(sessionStorage.userId, $stateParams['token'])
      .success(function(data, header) {
        console.log("TOKEN SUCCESS");
        console.log(data);
      })
      .error(function(data, header) {
        console.log("TOKEN ERROR");
        console.log(data);
      });
  }])

;