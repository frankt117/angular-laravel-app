angular.module( 'app.landing-page', [
    'ui.router'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'landing-page', {
      url: '/index',
      views: {
        "landing-main": {
          controller: 'LandingPageCtrl',
          templateUrl: 'view/landing/main.html'
        }
      }
    });
  })

  .controller( 'LandingPageCtrl', function LandingPageCtrl( $scope, MarketsService, CategoriesService ) {

    var _selectedMarket = {};
    var _selectedCategory = {};

    MarketsService.newMarketSelected = function() {
      _selectedMarket = MarketsService.getSelectedMarket();
      console.log(_selectedMarket);
    };

    CategoriesService.newCategorySelected = function() {
      _selectedCategory = CategoriesService.getSelctedCategory();
      console.log(_selectedCategory);
    };


  })

;