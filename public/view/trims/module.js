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



  .directive('addTrimAdmin', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/trims/add-trim-admin.html',
      controller: function($scope, TrimsService, CompaniesService) {
        this.marketId = 1;
        this.name = '';
        this.price = '';
        this.currency = '$';
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

          var trimObj = {'name' : this.name, 'price' : this.price, 'currency' : this.currency, 'user_id' : $scope.userDD.user_id,'package_id' : $scope.packageDetailsAdminCtrl.package.id, 'sequence' : 1, 'market_id' : this.marketId, 'effective_from' : $scope.fromDate, 'effective_to' : $scope.toDate};



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


        },
      controllerAs: 'addTrimAdminCtrl'
    }
  })





;








;