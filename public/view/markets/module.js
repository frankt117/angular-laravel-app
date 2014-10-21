angular.module( 'app.markets', ['app.markets-service'])

  .directive('marketsDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/markets/drop-down.html',
      controller: function($scope, MarketsService) {

        this.selected = "Select Market";
        this.markets = {};

        MarketsService.get()
          .then(function($response) {
            $scope.marketsDropDownCtrl.markets = $response.data;
          });

        this.status = {
          isopen: false
        };

        this.changeSelected = function(selectedNew) {
          this.selected = selectedNew;
        };

      },
      controllerAs: 'marketsDropDownCtrl'
    }
  })

;