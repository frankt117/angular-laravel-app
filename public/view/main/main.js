angular.module( 'app.main', [
    'ui.router',
    'app.checkout',
    'app.service-categories-services',
    'app.packages-service'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider
     .state( 'main', {
      url: '/app',
      views: {
        "landing-main": {
          controller: 'MainCtrl',
          templateUrl: 'view/main/main.html'
        }
      }
    })

    .state( 'main-search-by-category', {
      url: '/app/search/:category',
      views: {
        "landing-main": {
          controller: 'MainSearchByCategoryCtrl',
          templateUrl: 'view/main/main.html'
        }
      }
    })


    .state( 'info', {
      url: '/app/info/:category',
      views: {
        "landing-main": {
          controller: 'InfoCtrl',
          templateUrl: 'view/info/main.html'
        }
      }
    })

    .state('contacts', {
      abstract: true,
      url: '/app/contacts',
      resolve: {
        greeting: function(){
          return "MAIN";
        }
      },
      controller: function($scope, greeting) {
        this.greeting = greeting;
        //this.greeting = 'Main';
      },
      controllerAs: 'contactsCtrl',
      templateUrl: 'view/main/test.html'

    })

      .state('contacts.view', {
        url: '/view/:id',
        resolve: {
          id: function($stateParams){
            return $stateParams['id'];
          }
        },
        controller: function($scope, id) {
          this.id = id;
          //this.greeting = 'Main';
        },
        controllerAs: 'contactsViewCtrl',
        template: '<h1>View {{contactsViewCtrl.id}}</h1>'

      })

    .state('contacts.list', {
      url: '/list',

      template: '<h1>List</h1>'

    })

    .state('contacts.details', {
      url: '/details',
      controller: function($scope) {
        $scope.contactsCtrl.greeting = 'Details';
      },
      controllerAs: 'contactsDetailCtrl',

      template: '<h1>Details</h1>'

    })



    //********NEW APP ROUTES*********//
    .state( 'app', {
      abstract: true,
      url: '/app2',
      resolve: {

      },
      controller: function($scope) {
        //this.greeting = 'Main';
      },
      controllerAs: 'appCtrl',
      templateUrl: 'view/main/main_new.html'
    })

    .state('app.packages', {
      url: '/packages',

      template: '<h1>List</h1>'

    })




  })

//  .config(function config( $stateProvider ) {
//    $stateProvider.state( 'main-search-by-category', {
//      url: '/app/search/:category',
//      views: {
//        "landing-main": {
//          controller: 'MainSearchByCategoryCtrl',
//          templateUrl: 'view/main/main.html'
//        }
//      }
//    });
//  })
//
//  .config(function config( $stateProvider ) {
//    $stateProvider.state( 'info', {
//      url: '/app/info/:category',
//      views: {
//        "landing-main": {
//          controller: 'InfoCtrl',
//          templateUrl: 'view/info/main.html'
//        }
//      }
//    });
//  })



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


  .controller( 'InfoCtrl', function InfoCtrl( $scope, $stateParams ) {
    $scope._currentInfoView = "DEFAULT";
    $scope._currentInfoView = $stateParams['category'];

    $scope.getInfoView = function(view) {
      return $scope._currentInfoView == view;
    };

  })

;
