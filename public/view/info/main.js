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





;