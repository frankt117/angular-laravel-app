angular.module( 'app.service-categories', ['app.service-categories-services'])

  .directive('serviceCategoriesDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down.html',
      controller: function($scope, CategoriesService) {

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


      },
      controllerAs: 'serviceCategoriesDropDownCtrl'
    }
  })

  .directive('serviceCategoriesDropDownForInsert', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-insert.html',
      controller: function($scope, CategoriesService) {

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


      },
      controllerAs: 'serviceCategoriesDropDownForInsertCtrl'
    }
  })

  .directive('serviceCategoriesDropDownForUpdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down-update.html',
      controller: function($scope, CategoriesService) {

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


      },
      controllerAs: 'serviceCategoriesDropDownForUpdateCtrl'
    }
  })

;