angular.module( 'app.packages', ['app.packages-service', 'users', 'angularFileUpload'])

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
        $scope.packageDetailsCtrl.package = {};
        $scope.packageDetailsCtrl.slides = {};

//        this.updatePackage = function(packageId) {
//
//          PackagesService.getPackageById(packageId)
//            .success(function(data, status, header, config) {
//              $scope.packageDetailsCtrl.package = data;
//            });
//        };

      },
      controllerAs: 'packageDetailsCtrl'
    }
  })

  .directive('packageListAndDetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list-and-details.html',
      controller: function($scope, PackagesService, ImagesService) {
        this._currentView = "LIST";

        PackagesService.packageClicked = function(packageObj) {
          ImagesService.updateImageList(packageObj.id);
          $scope.packageDetailsCtrl.package = packageObj;
          $scope.packageListAndDetailsCtrl._currentView = "PACKAGE";
        };

        this.updateCurrentView = function(viewNew) {
          $scope.packageListAndDetailsCtrl._currentView = viewNew;
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

      },
      controllerAs: 'packageListAndDetailsCtrl'
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
      controller: function($scope, PackagesService, CategoriesService, MarketsService, FileUploader) {

        $scope.uploader = new FileUploader({
          url: 'index.php/api/v1/image-upload'
        });




        $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
          console.info('onWhenAddingFileFailed', item, filter, options);
        };
        $scope.uploader.onAfterAddingFile = function(fileItem) {
          console.info('onAfterAddingFile', fileItem);
        };
        $scope.uploader.onAfterAddingAll = function(addedFileItems) {
          console.info('onAfterAddingAll', addedFileItems);
        };
        $scope.uploader.onBeforeUploadItem = function(item) {
          console.info('onBeforeUploadItem', item);
        };
        $scope.uploader.onProgressItem = function(fileItem, progress) {
          console.info('onProgressItem', fileItem, progress);
        };
        $scope.uploader.onProgressAll = function(progress) {
          console.info('onProgressAll', progress);
        };
        $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
          console.info('onSuccessItem', fileItem, response, status, headers);
        };
        $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
          console.info('onErrorItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
          console.info('onCancelItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
          console.info('onCompleteItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCompleteAll = function() {
          console.info('onCompleteAll');
        };

        console.info('uploader', $scope.uploader);



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

          //console.log(sc);

          var packageObj = {'user_id' : form.target[1].value, 'category_id' : form.target[3].value, 'name' : form.target[4].value, 'description' : form.target[5].value, 'effective_from' : form.target[6].value, 'effective_to' : form.target[7].value, 'sequence' : 1};

          PackagesService.createPackage(packageObj)
            .success(function(data, status, header, config) {
              console.log(data);
              $scope.crudAdminPackageEdit.successAlert = true;

            })
            .error(function(data, status, header, config) {
              console.log("ERROR");
            });

        };

      },
      controllerAs: 'crudAdminPackageEdit'
    }
  })

;