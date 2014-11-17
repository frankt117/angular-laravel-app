angular.module( 'app.companies', ['app.companies-service'])

  .directive('companiesNegotiateTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/companies/negotiate-table.html',
      controller: function($scope, CompaniesService) {
        this.companies = [];

        console.log($scope.trimTableCtrl.trims);

        for (var i = 0; i < $scope.trimTableCtrl.trims.length; i++) {
          if($scope.trimTableCtrl.trims[i].selected == true) {
            $scope.companiesNegotiateTableCtrl.companies.push($scope.trimTableCtrl.trims[i]);
          }
        }

      },
      controllerAs: 'companiesNegotiateTableCtrl'
    }
  })

;