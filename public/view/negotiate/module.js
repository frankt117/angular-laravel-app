angular.module( 'app.negotiation', ['app.negotiations-service'])

  .directive('initiateNegotiation', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/negotiate/initiate.html',
      controller: function($scope) {
        this.package = $scope.packageDetailsCtrl.package;
//        this.selectedTrim = {};
//        this.trims = $scope.companiesNegotiateTableCtrl.companies;

//        console.log('DROP DOWN :');
//        console.log(this.trims);



      },
      controllerAs: 'initiateNegotiationCtrl'
    }
  })








;