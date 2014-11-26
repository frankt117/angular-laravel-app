angular.module( 'app.markets', ['app.markets-service'])

  .directive('marketsDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/markets/drop-down.html',
      controller: function($scope, MarketsService) {

        this.selected = MarketsService.getSelectedMarket();
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
          MarketsService.setSelectedMarket(selectedNew);
        };

      },
      controllerAs: 'marketsDropDownCtrl'
    }
  })

;