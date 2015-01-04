angular.module( 'app.info', [])


  .directive('aboutUs', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/about-us.html',
      controller: function($scope) {

      },
      controllerAs: 'aboutUsCtrl'
    }
  })

  .directive('faq', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/faq.html',
      controller: function($scope) {

      },
      controllerAs: 'faqCtrl'
    }
  })

  .directive('privacyPolicy', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/privacy-policy.html',
      controller: function($scope) {

      },
      controllerAs: 'privacyPolicyCtrl'
    }
  })

  .directive('termsOfService', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/terms-of-service.html',
      controller: function($scope) {

      },
      controllerAs: 'termsOfServiceCtrl'
    }
  })

  .directive('contactUs', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/info/contact-us.html',
      controller: function($scope) {

      },
      controllerAs: 'contactUsCtrl'
    }
  })





;