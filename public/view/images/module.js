angular.module( 'app.images', ['app.images-service', 'users'])

  .directive('imageCarousel', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/carousel.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.slides = {};

        ImagesService.updateImageList = function(packageId) {
          ImagesService.getAllImages()
            .success(function(data) {
              $scope.imageCarouselCtrl.slides = data;
            });

        };
      },
      controllerAs: 'imageCarouselCtrl'
    }
  })


;