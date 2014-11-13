angular.module( 'app.trims', ['app.trims-service'])

  .directive('trimTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/trims/table.html',
      controller: function($scope, TrimsService) {
        this.trims = {};

//        TrimsService.getAllTrims()
//          .success(function(data) {
//            $scope.trimTableCtrl.trims = data;
//
//          });

        TrimsService.updateTrimTable = function($packageId) {
          TrimsService.getAllByPackageId($packageId)
            .success(function(data) {
              $scope.trimTableCtrl.trims = data;

            });
        };
      },
      controllerAs: 'trimTableCtrl'
    }
  })


;