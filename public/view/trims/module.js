angular.module( 'app.trims', ['app.trims-service'])

  .directive('trimTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/trims/table.html',
      controller: function($scope, TrimsService, CompaniesService) {
        this.trims = {};

        this.updateTrimServiceProvider = function(userId, serviceProvider) {
          for(var i = 0; i < $scope.trimTableCtrl.trims.length; i++) {
            if($scope.trimTableCtrl.trims[i].user_id == userId) {
              $scope.trimTableCtrl.trims[i].service_provider = serviceProvider.name;
              $scope.trimTableCtrl.trims[i].company_id = serviceProvider.id;
              return;
            }
          }
        };

        TrimsService.updateTrimTable = function($packageId) {
          TrimsService.getAllByPackageId($packageId)
            .success(function(data) {
              $scope.trimTableCtrl.trims = data;

              var trimsData = data;

              for(var i = 0; i < trimsData.length; i++) {
                CompaniesService.getAllByPrimaryUserId(trimsData[i].user_id)
                  .success(function(data) {
                    var current = i;
                    $scope.trimTableCtrl.updateTrimServiceProvider(data[0].primary_user_id, data[0]);
                  });
              }





            });
        };
      },
      controllerAs: 'trimTableCtrl'
    }
  })








;