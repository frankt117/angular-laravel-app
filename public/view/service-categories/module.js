angular.module( 'app.service-categories', ['app.service-categories-services'])

  .directive('serviceCategoriesDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down.html',
      controller: ["$scope", "CategoriesService", function($scope, CategoriesService) {

        this.selected = CategoriesService.getSelctedCategory();
        this.categories = {};

        CategoriesService.getCategoryNames()
          .then(function($response) {
            $scope.serviceCategoriesDropDownCtrl.categories = $response.data;
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          this.selected = selectedNew;
          CategoriesService.setSelectedCategory(selectedNew);
        };


      }],
      controllerAs: 'serviceCategoriesDropDownCtrl'
    }
  })

  .directive('serviceCategoriesDropDownRoute', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-route.html',
      controller: ["$scope", "CategoriesService", function($scope, CategoriesService) {

        this.selected = CategoriesService.getSelctedCategory();
        this.categories = {};

        CategoriesService.get()
          .then(function($response) {
            $scope.serviceCategoriesDropDownRouteCtrl.categories = $response.data;
            console.log($scope.serviceCategoriesDropDownRouteCtrl.categories);
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          this.selected = selectedNew;
          CategoriesService.setSelectedCategory(selectedNew);
        };


      }],
      controllerAs: 'serviceCategoriesDropDownRouteCtrl'
    }
  })

  .directive('serviceCategoriesDropDownSide', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-side.html',
      controller: ["$scope", "CategoriesService", "PackagesService", function($scope, CategoriesService, PackagesService) {

        this.selected = CategoriesService.getSelctedCategory();
        this.categories = {};
        this.categoryCode = {};

        CategoriesService.get()
          .then(function($response) {
            $scope.serviceCategoriesDropDownSideCtrl.categories = $response.data;
            console.log($scope.serviceCategoriesDropDownSideCtrl.categories);
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew, code) {
          console.log(code);
          this.selected = selectedNew;
          CategoriesService.setSelectedCategory(selectedNew);

          this.categoryCode = code;
          PackagesService.getPackagesByCode(this.categoryCode)
            .success(function (data,status) {
              PackagesService.setPackageList(data);
              $scope.packagesListSideCtrl.packages = data;
              PackagesService.setPackageListImages();
              PackagesService.setPackageListTrims();
            });
        };





      }],
      controllerAs: 'serviceCategoriesDropDownSideCtrl'
    }
  })

  .directive('serviceCategoriesDropDownForInsert', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-insert.html',
      controller: ["$scope", "CategoriesService", function($scope, CategoriesService) {

        this.selectedName = "Select";
        this.selectedId = "";
        this.categories = {};

        CategoriesService.get()
          .then(function($response) {
            $scope.serviceCategoriesDropDownForInsertCtrl.categories = $response.data;
            console.log("CATS");
            console.log($response.data);
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          console.log("NEW SELECT : ");
          console.log(selectedNew);
          $scope.serviceCategoriesDropDownForInsertCtrl.selectedName = selectedNew.name;
          $scope.serviceCategoriesDropDownForInsertCtrl.selectedId = selectedNew.id;
        };


      }],
      controllerAs: 'serviceCategoriesDropDownForInsertCtrl'
    }
  })

  .directive('serviceCategoriesDropDownForUpdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-update.html',
      controller: ["$scope", "CategoriesService", function($scope, CategoriesService) {

        this.selectedName = "Select";
        this.selectedId = "";
        this.categories = {};

        CategoriesService.get()
          .then(function($response) {
            $scope.serviceCategoriesDropDownForUpdateCtrl.categories = $response.data;
            console.log("CATS");
            console.log($response.data);
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          console.log("NEW SELECT : ");
          console.log(selectedNew);
          $scope.serviceCategoriesDropDownForUpdateCtrl.selectedName = selectedNew.name;
          $scope.serviceCategoriesDropDownForUpdateCtrl.selectedId = selectedNew.id;
        };

        this.updateSelectedById = function(categoryId) {
          for ( var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id == categoryId) {
              $scope.serviceCategoriesDropDownForUpdateCtrl.selectedId = categoryId;
              $scope.serviceCategoriesDropDownForUpdateCtrl.selectedName = this.categories[i].name;
              return;
            }
          }
        }


      }],
      controllerAs: 'serviceCategoriesDropDownForUpdateCtrl'
    }
  })

;