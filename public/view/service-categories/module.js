angular.module( 'app.service-categories', ['app.service-categories-services'])

  .directive('serviceCategoriesDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down.html',
      controller: function($scope, ServiceCategories) {

        this.selected = "Select Category";
        this.categories = {};

        ServiceCategories.getCategoryNames()
          .then(function($response) {
            console.log($response.data);
            $scope.serviceCategoriesDropDownCtrl.categories = $response.data;
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          this.selected = selectedNew;
        };


      },
      controllerAs: 'serviceCategoriesDropDownCtrl'
    }
  })

;