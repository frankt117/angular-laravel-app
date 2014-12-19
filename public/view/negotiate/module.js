angular.module( 'app.negotiation', ['app.negotiations-service'])

  .directive('initiateNegotiation', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/negotiate/initiate.html',
      controller: function($scope, NegotiationsService) {
        this.package = $scope.packageDetailsCtrl.package;
        this.comment = '';
        this.customerEmailAddress = '';

        this.submit = function() {
          console.log("NEGOTIATION INITIATED!!");
          console.log(this.comment);
          console.log($scope.negotiateTrimDropDownCtrl.selectedTrimId);
          console.log(this.customerEmailAddress);

          var obj = {'trim_id' : $scope.negotiateTrimDropDownCtrl.selectedTrimId, 'respond_to_email_id' : this.customerEmailAddress, 'mail_text' : this.comment};

          NegotiationsService.createNegotiation(obj)
            .success(function(data, header) {
              console.log(data);
            })
            .error(function(data, header) {
              console.log('EFFFFEDDDD');
            });
        };


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


        this.changeSelected = function(name, price, id) {
          $scope.negotiateTrimDropDownCtrl.selectedTrim = name;
          $scope.negotiateTrimDropDownCtrl.selectedTrimPrice = price;
          $scope.negotiateTrimDropDownCtrl.selectedTrimId = id;
          $scope.negotiateTrimDropDownCtrl.showPrice = true;
        }



      },
      controllerAs: 'negotiateTrimDropDownCtrl'
    }
  })









;