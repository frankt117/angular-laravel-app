angular.module( 'app.packages', ['app.packages-service', 'users', 'textAngular'])

  .directive('packagesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list.html',
      controller: function($scope, PackagesService, CategoriesService) {

        this.packages = PackagesService.getPackageList();

        console.log(this.packages);

        PackagesService.updatePackageList = function(category, market) {
          var categoryObj = CategoriesService.getByCategoryName_Promise(category)
            .success(function(data) {
              PackagesService.getPackagesByCategory(data.id)
                .success(function(data) {
                  console.log(data);
                  $scope.packagesListCtrl.packages = data;
                  PackagesService.setPackageList(data);
                  console.log($scope);

                })
            });
        };

        this.clicked = function(packageObj) {
          console.log("PACKAGE CLICKED!!!");
          console.log(packageObj);
          PackagesService.packageClicked(packageObj);
        }

      },
      controllerAs: 'packagesListCtrl'
    }
  })

  .directive('packageDetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/details.html',
      controller: function($scope, PackagesService, ImagesService) {

      },
      controllerAs: 'packageDetailsCtrl'
    }
  })

  .directive('packageDetailsAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/details-admin.html',
      controller: function($scope, PackagesService, ImagesService) {

      },
      controllerAs: 'packageDetailsAdminCtrl'
    }
  })

  .directive('packageListAndDetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list-and-details.html',
      controller: function($scope, PackagesService, ImagesService, TrimsService) {
        this._currentView = "LIST";

        PackagesService.packageClicked = function(packageObj) {
          ImagesService.updateImageList(packageObj.id);
          $scope.packageDetailsCtrl.package = packageObj;
          $scope.packageListAndDetailsCtrl._currentView = "PACKAGE";
          TrimsService.updateTrimTable(packageObj.id);
        };

        this.updateCurrentView = function(viewNew) {
          $scope.imageCarouselCtrl.show = false;
          $scope.packageListAndDetailsCtrl._currentView = viewNew;
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

      },
      controllerAs: 'packageListAndDetailsCtrl'
    }
  })

  .directive('packageListAndDetailsAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list-and-details-admin.html',
      controller: function($scope, PackagesService, ImagesService, TrimsService) {
        this._currentView = "LIST";

        PackagesService.packageClicked = function(packageObj) {
          ImagesService.updateImageList(packageObj.id);
          $scope.packageDetailsAdminCtrl.package = packageObj;
          $scope.packageListAndDetailsAdminCtrl._currentView = "PACKAGE";
          TrimsService.updateTrimTable(packageObj.id);
        };

        this.updateCurrentView = function(viewNew) {
          $scope.imageCarouselCtrl.show = false;
          $scope.packageListAndDetailsAdminCtrl._currentView = viewNew;
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

        this.deleteTrims = function() {

          var currentTrims = $scope.trimTableCtrl.trims;
          var newTrims = [];

          for(var i = 0; i < currentTrims.length; i++) {
            if(!currentTrims[i].selected) {
              newTrims.push(currentTrims[i]);
            } else {
              TrimsService.deleteTrimById(currentTrims[i].id)
                .success(function(data, header) {
                });
            }
          }

          $scope.trimTableCtrl.trims = newTrims;
        };

      },
      controllerAs: 'packageListAndDetailsAdminCtrl'
    }
  })

  .directive('packageCrudAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService) {

        var _selectedMarket = {};
        var _selectedCategory = {};
        this._currentView = 'MAIN';

        MarketsService.newMarketSelected = function() {
          _selectedMarket = MarketsService.getSelectedMarket();
        };

        CategoriesService.newCategorySelected = function() {
          _selectedCategory = CategoriesService.getSelctedCategory();
          PackagesService.updatePackageList(_selectedCategory);
        };

        PackagesService.packageListClicked = function(packageObj) {
          console.log("IN CRUD CONTROLLER!!!");
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

        this.setCurrentView = function(view) {
          this._currentView = view;
        };


      },
      controllerAs: 'packageCrudAdminCtrl'
    }
  })

  .directive('crudAdminPackageListTile', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin-package-list-tile.html'
    }
  })

  .directive('crudAdminPackageEdit', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-admin-package-edit-tile.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService, ImagesService) {


        $scope.fromDate = null;
        $scope.toDate = null;
        this.successAlert = false;

        this.fromDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        this.toDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        $scope.openFrom = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedFrom = true;
        };

        $scope.openTo = function($event) {
          console.log($event);
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedTo = true;
        };

        this.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
        this.format = this.formats[1];

        this.clear = function () {
          this.fromDate = null;
        };

        this.submit = function (form, $window) {

          console.log("SUBMITTING");
          console.log(form);

          var packageObj = {'user_id' : form.target[1].value, 'category_id' : form.target[3].value, 'name' : form.target[4].value, 'summary' : form.target[5].value, 'description' : form.target[30].value, 'effective_from' : form.target[32].value, 'effective_to' : form.target[82].value, 'sequence' : 1};

          console.log(packageObj);
          PackagesService.createPackage(packageObj)
            .success(function(data, status, header, config) {
              console.log('SUCCESS!!');
              console.log(data);
              $scope.crudAdminPackageEdit.successAlert = true;

              var length = $scope.imageEditTableCtrl.slidesEdit.length;

              for (var i = 0; i < length; i++) {

                var currentImage = $scope.imageEditTableCtrl.slidesEdit[i];
                var pathURL = currentImage.path+currentImage.title;
                console.log(currentImage);
                var imageObj = {'title' : currentImage.newTitle, 'description' : currentImage.description, 'path' : pathURL, 'package_id' : data.id, 'sequence' : currentImage.sequence, 'effective_from' :  data.effective_from, 'effective_to' : data.effective_to};
                console.log(imageObj);
                ImagesService.createImage(imageObj)
                  .success(function(data, status, header, config) {
                    console.log("IMAGE CREATED");
                  })
                  .error(function(data, status, header, config) {
                    console.log("IMAGE FAILED");
                  });
              }

            })
            .error(function(data, status, header, config) {
              console.log("ERROR");
            });

        };

      },
      controllerAs: 'crudAdminPackageEdit'
    }
  })




  .directive('crudCustomerPackageEdit', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/crud-customer-package-edit.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService, ImagesService) {
        this.userId = 9999;
        this.categoryId = 9999;
        this.name = "";
        this.description = '';

        $scope.fromDate = null;
        $scope.toDate = null;
        this.successAlert = false;

        this.fromDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        this.toDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        $scope.openFrom = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedFrom = true;
        };

        $scope.openTo = function($event) {
          console.log($event);
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedTo = true;
        };

        this.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
        this.format = this.formats[1];

        this.clear = function () {
          this.fromDate = null;
        };

        this.submit = function (form, $window) {

          var packageObj = {'user_id' : this.userId, 'category_id' : this.categoryId, 'name' : this.name, 'summary' : '', 'description' : this.description, 'effective_from' : '', 'effective_to' : '', 'sequence' : 1};

          PackagesService.createPackage(packageObj)
            .success(function(data, status, header, config) {
              console.log('SUCCESS!!');
              console.log(data);
              $scope.crudCustomerPackageEditCtrl.successAlert = true;

              var length = $scope.imageEditTableCtrl.slidesEdit.length;

              for (var i = 0; i < length; i++) {

                var currentImage = $scope.imageEditTableCtrl.slidesEdit[i];
                var pathURL = currentImage.path+currentImage.title;
                console.log(currentImage);
                var imageObj = {'title' : currentImage.newTitle, 'description' : currentImage.description, 'path' : pathURL, 'package_id' : data.id, 'sequence' : currentImage.sequence, 'effective_from' :  data.effective_from, 'effective_to' : data.effective_to};
                console.log(imageObj);
                ImagesService.createImage(imageObj)
                  .success(function(data, status, header, config) {
                    console.log("IMAGE CREATED");
                  })
                  .error(function(data, status, header, config) {
                    console.log("IMAGE FAILED");
                  });
              }

            })
            .error(function(data, status, header, config) {
              console.log("ERROR");
            });

        };

      },
      controllerAs: 'crudCustomerPackageEditCtrl'
    }
  })

;