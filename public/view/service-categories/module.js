angular.module( 'app.service-categories', ['app.service-categories-services'])

  .directive('serviceCategoriesDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/service-categories/drop-down.html',
      controller: function($scope, ServiceCategories) {

        $scope.selected = "Select Category";

        ServiceCategories.getCategoryNames()
          .then(function($response) {
            console.log($response.data);
            $scope.categories = $response.data;
          });

        $scope.status = {
          isopen: false
        };

        $scope.changeSelected = function(selectedNew) {
          console.log(selectedNew);
          $scope.selected = selectedNew;
        };


      },
      controllerAs: 'serviceCategoriesDropDownCtrl'
    }
  })

;