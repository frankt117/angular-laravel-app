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
        this.marketId = {};


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

          console.log("SUBMITTING");
          console.log(form);

          var packageObj = {'user_id' : form.target[1].value, 'category_id' : form.target[3].value, 'name' : form.target[4].value, 'summary' : form.target[5].value, 'description' : form.target[30].value, 'effective_from' : form.target[32].value, 'effective_to' : form.target[82].value, 'sequence' : 1};

        }


        },
      controllerAs: 'addTrimAdminCtrl'
    }
  })





;








;