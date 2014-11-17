angular.module( 'app.companies', ['app.companies-service'])

  .directive('companiesNegotiateTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/companies/negotiate-table.html',
      controller: function($scope, CompaniesService) {
        this.companies = [];

        for (var i = 0; i < $scope.trimTableCtrl.trims.length; i++) {
          if($scope.trimTableCtrl.trims[i].selected == true) {
            this.companies.push($scope.trimTableCtrl.trims[i]);
          }
        }

      },
      controllerAs: 'companiesNegotiateTableCtrl'
    }
  })

;