angular.module( 'app.negotiation', ['app.negotiations-service'])

  .directive('initiateNegotiation', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/negotiate/initiate.html',
      controller: function($scope, NegotiationsService) {
        this.package = $scope.packageDetailsCtrl.package;
        this.comment = '';
        this.customerEmailAddress = '';
        this.customerPhoneNumber = '';
        this.successAlert = false;

        this.submit = function() {
          for (var i = 0; i < $scope.companiesNegotiateTableCtrl.companies.length; i++ ) {
            var obj = {'trim_id' : $scope.companiesNegotiateTableCtrl.companies[i].id, 'respond_to_email_id' : this.customerEmailAddress, 'respond_to_phone_number' : this.customerPhoneNumber, 'mail_text' : this.comment};

            NegotiationsService.createNegotiation(obj)
              .success(function(data, header) {
                console.log(data);
                $scope.initiateNegotiationCtrl.successAlert = true;
              })
              .error(function(data, header) {
              });

          }


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