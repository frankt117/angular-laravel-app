angular.module( 'app.trims', ['app.trims-service'])

  .directive('trimTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/trims/table.html',
      controller: ["$scope", "TrimsService", "CompaniesService", function($scope, TrimsService, CompaniesService) {
        this.trims = TrimsService.getTableTrims();


        this.getSelectedTrim = function() {
          for(var i = 0; i < $scope.trimTableCtrl.trims.length; i++) {
            if($scope.trimTableCtrl.trims[i].selected) {
              return $scope.trimTableCtrl.trims[i];
            }
          }
        };

        this.getSelectedTrims = function() {
          var trimsArray = [];

          for(var i = 0; i < $scope.trimTableCtrl.trims.length; i++) {
            if($scope.trimTableCtrl.trims[i].selected) {
              trimsArray.push($scope.trimTableCtrl.trims[i]);
            }
          }

          return trimsArray;
        };






      }],
      controllerAs: 'trimTableCtrl'
    }
  })



  .directive('addTrimAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/trims/add-trim-admin.html',
      controller: ["$scope", "TrimsService", "CompaniesService", function($scope, TrimsService, CompaniesService) {
        this.marketId = 1;
        this.name = '';
        this.price = '';
        this.currency = '$';
        this.comment = '';
        this.successAlert = false;


        $scope.fromDate = null;
        $scope.toDate = null;
        this.successAlert = false;

        this.fromDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        this.toDateOptions = {
          formatYear: 'yy',
          startingDay: 1
        };

        $scope.openFrom = function($event) {
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedFrom = true;
        };

        $scope.openTo = function($event) {
          console.log($event);
          $event.preventDefault();
          $event.stopPropagation();

          $scope.openedTo = true;
        };

        this.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
        this.format = this.formats[1];

        this.clear = function () {
          this.fromDate = null;
        };

        this.submit = function (form, $window) {

          console.log("SUBMITTING TRIM");
          console.log(form);

          var trimObj = {'name' : this.name, 'comment' : this.comment, 'price' : this.price, 'currency' : this.currency, 'user_id' : $scope.userDD.user_id,'package_id' : $scope.packageDetailsAdminCtrl.package.id, 'sequence' : 1, 'market_id' : this.marketId, 'effective_from' : $scope.fromDate, 'effective_to' : $scope.toDate};



          TrimsService.createTrim(trimObj)
            .success(function(data, header) {

              var trim = data;


              CompaniesService.getAllByPrimaryUserId(trim.user_id)
                .success(function(data) {
                  console.log(data);
                  trim.service_provider = data[0].name;
                  console.log(trim);
                  $scope.trimTableCtrl.trims.push(trim);
                  $scope.addTrimAdminCtrl.successAlert = true;
                  console.log('SUCCESS!!!');
                });


            })
            .error(function() {
              console.log('ERROR UPLOADING TRIM');
            });

        }


      }],
      controllerAs: 'addTrimAdminCtrl'
    }
  })





;








;