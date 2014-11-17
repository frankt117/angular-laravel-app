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

  .directive('negotiateTrimDropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/negotiate/trim-drop-down.html',
      controller: function($scope) {
        this.selectedTrim = 'Select Package';
        this.selectedTrimPrice = '';
        this.showPrice = false;

        this.trims = $scope.companiesNegotiateTableCtrl.companies;

        console.log('DROP DOWN :');
        console.log(this.trims);


        this.changeSelected = function(name, price) {
          $scope.negotiateTrimDropDownCtrl.selectedTrim = name;
          $scope.negotiateTrimDropDownCtrl.selectedTrimPrice = price;
          $scope.negotiateTrimDropDownCtrl.showPrice = true;
        }



      },
      controllerAs: 'negotiateTrimDropDownCtrl'
    }
  })









;