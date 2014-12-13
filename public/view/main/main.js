angular.module( 'app.main', [
    'ui.router',
    'app.checkout',
    'app.service-categories-services',
    'app.packages-service'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'main', {
      url: '/app',
      views: {
        "landing-main": {
          controller: 'MainCtrl',
          templateUrl: 'view/main/main.html'
        }
      }
    });
  })

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'main-search-by-category', {
      url: '/app/search/:category',
      views: {
        "landing-main": {
          controller: 'MainSearchByCategoryCtrl',
          templateUrl: 'view/main/main.html'
        }
      }
    });
  })



  .controller( 'MainCtrl', function MainCtrl( $scope, MarketsService, CategoriesService, PackagesService ) {

    var _selectedMarket = {};
    var _selectedCategory = {};
    $scope._currentMainView = "PACKAGES";

    MarketsService.newMarketSelected = function() {
      _selectedMarket = MarketsService.getSelectedMarket();
    };

    CategoriesService.newCategorySelected = function() {
      _selectedCategory = CategoriesService.getSelctedCategory();
      PackagesService.updatePackageList(_selectedCategory);
    };

    $scope.updateMainCurrentView = function(viewNew) {
      $scope._currentMainView = viewNew;
    };

    $scope.getMainCurrentView = function(view) {
      return $scope._currentMainView == view;
    };

  })

  .controller( 'MainSearchByCategoryCtrl', function MainSearchByCategoryCtrl( $scope, MarketsService, CategoriesService, PackagesService, $stateParams ) {

    var _selectedMarket = {};
    var _selectedCategory = {};
    $scope._currentMainView = "PACKAGES";

    PackagesService.updatePackageList = function(category, userId) {
      console.log("MAIN CONTROLLER LOGIC CALLED");
      if(userId) {
        CategoriesService.getByCategoryName_Promise(category)
          .success(function(data) {
            PackagesService.getPackagesByCategoryAndUserId(data.id, userId)
              .success(function(data) {
                $scope.packagesListCtrl.packages = data;
                PackagesService.setPackageList(data);

              })
          });
      } else {
        CategoriesService.getByCategoryName_Promise(category)
          .success(function(data) {
            PackagesService.getPackagesByCategory(data.id)
              .success(function(data) {
                $scope.packagesListCtrl.packages = data;
                PackagesService.setPackageList(data);
                PackagesService.setPackageListImages();
                PackagesService.setPackageListTrims();
              })
          });
      }

    };


    MarketsService.newMarketSelected = function() {
      _selectedMarket = MarketsService.getSelectedMarket();
    };

    CategoriesService.newCategorySelected = function() {
      _selectedCategory = CategoriesService.getSelctedCategory();
      PackagesService.updatePackageList(_selectedCategory);
    };

    $scope.updateMainCurrentView = function(viewNew) {
      $scope._currentMainView = viewNew;
    };

    $scope.getMainCurrentView = function(view) {
      return $scope._currentMainView == view;
    };

    CategoriesService.getByCode($stateParams['category'])
      .success(function(data, header) {
        console.log(data);
        CategoriesService.setSelectedCategory(data.name);
        $scope.serviceCategoriesDropDownCtrl.selected = data.name;
      })
      .error(function(data, header) {
        console.log("FAILED GETTING CATS");
      });

  })

;
