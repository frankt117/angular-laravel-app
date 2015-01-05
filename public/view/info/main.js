angular.module( 'app.info', [])


  .directive('aboutUs', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/about-us.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'aboutUsCtrl'
    }
  })

  .directive('faq', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/faq.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'faqCtrl'
    }
  })

  .directive('privacyPolicy', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/privacy-policy.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'privacyPolicyCtrl'
    }
  })

  .directive('termsOfService', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/terms-of-service.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'termsOfServiceCtrl'
    }
  })

  .directive('contactUs', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/contact-us.html',
      controller: ["$scope", function($scope) {

      }],
      controllerAs: 'contactUsCtrl'
    }
  })





;