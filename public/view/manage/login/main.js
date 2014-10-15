angular.module( 'app.login', ['app.new-user'])


  .controller( 'LoginCtrl', function LoginCtrl( $scope, $http, Login) {
    $scope.email = '';
    $scope.password = '';
    $scope.panelSelected = 1;
    $scope.showNewUserPanel = true;

    $scope.clickTest = function () {
      console.log("CLICKED");
    };

    $scope.submit = function (form) {
      $scope.email = form.target[0].value;
      $scope.password = form.target[1].value;

      console.log($scope.email);

      var userEmail = $scope.email;

//      $http({
//        method: "GET",
//        url: "index.php/api/v1/users/"+$scope.email,
//        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
//        data: { }
//      }).then(function($response) {
//        console.log($response);
//        $scope.$parent.user.userId = $response.data[0].id;
//        console.log($scope);
//      });
      var loginCreds = {'email' : $scope.email, 'password' : $scope.password};
      Login.auth(loginCreds).then(function($response) {
        console.log($response);
      });
    }

    $scope.isSelected = function isSelected(checkPanel) {
      return $scope.panelSelected === checkPanel;
    }

    $scope.selectPanel = function selectPanel(panel) {
     $scope.panelSelected = panel;
     console.log($scope.panelSelected);
    }

    if ( $scope.$parent.user.userCategory === 'ADMIN') {
      $scope.showNewUserPanel = false;
    }

  })







  //SEMANTIC UI CHECKBOX NOT CURRENTLY BEING USED
  .directive('checkbox', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope :{
        type: "@",
        size: "@",
        checked: "@",
        model: '=ngModel'
      },
      template: "<div class=\"{{checkbox_class}}\">" +
        "<input type=\"checkbox\">"        +
        "<label ng-click=\"click_on_checkbox()\" ng-transclude></label>" +
        "</div>",
      link: function(scope, element, attrs, ngModel) {

        //
        // set up checkbox class and type
        //
        if (scope.type == 'standard' || scope.type == undefined){
          scope.type = 'standard';
          scope.checkbox_class = 'ui checkbox';
        } else if (scope.type == 'slider'){
          scope.type = 'slider';
          scope.checkbox_class = 'ui slider checkbox';
        } else if (scope.type == 'toggle'){
          scope.type = 'toggle';
          scope.checkbox_class = 'ui toggle checkbox';
        } else {
          scope.type = 'standard';
          scope.checkbox_class = 'ui checkbox';
        }

        //
        // set checkbox size
        //
        if (scope.size == 'large'){
          scope.checkbox_class = scope.checkbox_class + ' large';
        } else if (scope.size == 'huge') {
          scope.checkbox_class = scope.checkbox_class + ' huge';
        }

        //
        // set checked/unchecked
        //
        if (scope.checked == 'false' || scope.checked == undefined) {
          scope.checked = false;
        } else {
          scope.checked = true;
          element.children()[0].setAttribute('checked', '');
        }

        //
        // Click handler
        //
        element.bind('click', function () {
          scope.$apply(function() {
            if (scope.checked == true){
              scope.checked = true;
              scope.model   = false;
              element.children()[0].removeAttribute('checked');
            } else {
              scope.checked = true;
              scope.model   = true;
              element.children()[0].setAttribute('checked', 'true');
            }
          })
        });

        //
        // Watch for ng-model
        //
        scope.$watch('model', function(val){
          if (val == undefined)
            return;

          if (val == true){
            scope.checked = true;
            element.children()[0].setAttribute('checked', 'true');
          } else {
            scope.checked = false;
            element.children()[0].removeAttribute('checked');
          }
        });
      }
    }
  });




;