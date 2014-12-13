angular.module( 'app.packages', ['app.packages-service', 'app.users-service', 'users', 'textAngular', 'app.images-service'])

  .directive('packagesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list.html',
      controller: function($scope, PackagesService, CategoriesService, ImagesService) {

        this.packages = PackagesService.getPackageList();

        console.log(this.packages);

        PackagesService.updatePackageList = function(category, userId) {
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
        this.package = {};


        this.fromDate = null;
        this.toDate = null;
        this.successAlert = false;

        this.fromDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        this.toDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        this.openFrom = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.packageDetailsAdminCtrl.openedFrom = true;
        };

        this.openTo = function($event) {
          console.log($event);
          $event.preventDefault();
          $event.stopPropagation();

          $scope.packageDetailsAdminCtrl.openedTo = true;
        };

        this.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
        this.format = this.formats[1];

        this.clear = function () {
          this.fromDate = null;
        };


        this.hydratePackage = function(packageObj) {
          this.toDate = null;
          this.fromDate = null;
          $scope.packageDetailsAdminCtrl.package = packageObj;
          console.log("HYDRATE");
          console.log($scope.packageDetailsAdminCtrl.package);
          $scope.inputDescription = packageObj.description;
          this.fromDate = packageObj.effective_from;

          if (packageObj.effective_to != '0000-00-00') {
            this.toDate = packageObj.effective_to;
          }


          $scope.userDD.updateSelectedName(packageObj.user_id);
        }



        this.submit = function (form, $window) {

          if (this.package.effective_from != this.fromDate) {
            var newFromDate = new Date(this.fromDate);
            this.package.effective_from = newFromDate.getFullYear()+'-'+(newFromDate.getMonth()+1)+'-'+newFromDate.getDate();
          }

          if (this.package.effective_to != this.toDate) {
            var newToDate = new Date(this.toDate);
            this.package.effective_to = newToDate.getFullYear()+'-'+(newToDate.getMonth()+1)+'-'+newToDate.getDate();
          }


          PackagesService.createPackage(this.package)
            .success(function(data, status, header, config) {
              console.log(data);
              $scope.packageDetailsAdminCtrl.addAlert();
            });

        }


        this.alerts = [];

        this.addAlert = function() {
          $scope.packageDetailsAdminCtrl.alerts.push({type: 'success', msg: 'Success!  Package updated.'});
        };

        this.closeAlert = function(index) {
          $scope.packageDetailsAdminCtrl.alerts.splice(index, 1);
        };

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
          $scope.selectedPackage = packageObj;
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

          $scope.packageListAndDetailsAdminCtrl._currentView = "PACKAGE";
          $scope.updatePackageAdminCtrl.updatePackage(packageObj);
          $scope.selectedPackage = packageObj;

        };

        this.updateCurrentView = function(viewNew) {
          //$scope.imageCarouselCtrl.show = false;
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
      controller: function($scope, PackagesService, CategoriesService, MarketsService, UsersService) {

        this._selectedMarket = {};
        this._selectedCategory = {};
        this._selectedUserId = null;
        this._currentView = 'MAIN';

        MarketsService.newMarketSelected = function() {
          this._selectedMarket = MarketsService.getSelectedMarket();
        };

        CategoriesService.newCategorySelected = function() {
          this._selectedCategory = CategoriesService.getSelctedCategory();
          PackagesService.updatePackageList(this._selectedCategory, $scope.packageCrudAdminCtrl._selectedUserId);
        };

        UsersService.userDropDownClickedAction = function(userId) {
          $scope.packageCrudAdminCtrl._selectedUserId = userId;
          PackagesService.updatePackageList(CategoriesService.getSelctedCategory(), userId);
        }

        PackagesService.packageListClicked = function(packageObj) {
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
        this.categoryId = '';
        this.code = '';
        this.name = '';
        this.summary = '';
        this.description = '';
        this.sequence = '';

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

          var packageObj = {'user_id' : $scope.userDD.user_id, 'category_id' : $scope.serviceCategoriesDropDownForInsertCtrl.selectedId, 'code' : this.code, 'name' : this.name, 'summary' : this.summary, 'description' : $scope.inputDescription, 'effective_from' : $scope.fromDate, 'effective_to' : $scope.toDate, 'sequence' : this.sequence};

          PackagesService.createPackage(packageObj)
            .success(function(data, status, header, config) {
              console.log('SUCCESS!!');
              console.log(data);
              $scope.crudAdminPackageEdit.successAlert = true;

              var length = $scope.imageEditTableCtrl.slidesEdit.length;

              for (var i = 0; i < length; i++) {

                var currentImage = $scope.imageEditTableCtrl.slidesEdit[i];
                var pathURL = currentImage.path+currentImage.title;
                var imageObj = {'title' : currentImage.newTitle, 'description' : currentImage.description, 'path' : pathURL, 'package_id' : data.id, 'sequence' : currentImage.sequence, 'effective_from' :  data.effective_from, 'effective_to' : data.effective_to};
                ImagesService.createImage(imageObj)
                  .success(function(data, status, header, config) {
                    console.log("IMAGE CREATED");
                  })
                  .error(function(data, status, header, config) {
                    console.log("IMAGE FAILED");
                  });
              }

              $scope.crudAdminPackageEdit.categoryId = '';
              $scope.crudAdminPackageEdit.code = '';
              $scope.crudAdminPackageEdit.name = '';
              $scope.crudAdminPackageEdit.summary = '';
              $scope.crudAdminPackageEdit.description = '';
              $scope.crudAdminPackageEdit.sequence = '';
              $scope.userDD.user_id = '';
              $scope.$scope.serviceCategoriesDropDownForInsertCtrl.selectedId = '';

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



  .directive('updatePackageAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/update-admin.html',
      controller: function($scope, PackagesService, CategoriesService, MarketsService, TrimsService, ImagesService) {
        this._currentUpdatePackageView = 'DETAILS';


        this.getCurrentView = function(view) {
          return this._currentUpdatePackageView == view;
        };

        this.setCurrentView = function(view) {
          this._currentUpdatePackageView = view;
        };


        this.updatePackage = function(packageObj) {
          $scope.imageEditTableCtrl.slidesEdit = [];
          //$scope.imageListAndUploaderCtrl.listEmpty = true;

          TrimsService.updateTrimTable(packageObj.id);
          //$scope.packageDetailsAdminCtrl.package = packageObj;
          $scope.packageDetailsAdminCtrl.hydratePackage(packageObj);
          ImagesService.updateImageList(packageObj.id);
          $scope.serviceCategoriesDropDownForUpdateCtrl.updateSelectedById(packageObj.category_id);
          ImagesService.getImagesByPackageId(packageObj.id)
            .success(function(data, header) {
              console.log("UPDATE PACKAGE LIST");

              for ( var i = 0; i < data.length; i++ ) {
                console.log(data[i].path.substring(0, 15));
                console.log(data[i].path.substring(15));

                var imageObj = {
                  "path" : "/images/upload/",
                  "title" : data[i].path.substring(15),
                  "newTitle" : data[i].title,
                  "description" : data[i].description,
                  "sequence" : data[i].sequence,
                  "id" : data[i].id,
                  "fromDb" : true
                };

                $scope.imageEditTableCtrl.slidesEdit.push(imageObj);

                //$scope.imageListAndUploaderCtrl.listEmpty = false;
              }

              $scope.imageEditTableCtrl.sortImageList();

              //console.log($scope.imageEditTableCtrl.slidesEdit);

            })
            .error(function(data, header) {

            });
        }


      },
      controllerAs: 'updatePackageAdminCtrl'
    }
  })

  .directive('updateTrimsAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/update-trims-admin.html',
      controller: function($scope,TrimsService, ImagesService) {



      },
      controllerAs: 'updateTrimsAdminCtrl'
    }
  })

;