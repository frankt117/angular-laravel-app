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

;