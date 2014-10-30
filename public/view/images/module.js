angular.module( 'app.images', ['app.images-service', 'users'])

  .directive('imageCarousel', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/packages/list.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.slides = {};

        ImagesService.updateImageList = function(packageId) {

        };
      },
      controllerAs: 'imageCarouselCtrl'
    }
  })


;