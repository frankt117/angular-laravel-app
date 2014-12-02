angular.module( 'app.images', ['app.images-service', 'users', 'angularFileUpload'])

  .directive('imageCarousel', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/carousel.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.slides = [];
        this.show = false;

        ImagesService.updateImageList = function(packageId) {
          ImagesService.getImagesByPackageId(packageId)
            .success(function(data) {
              $scope.imageCarouselCtrl.slides = data;
              ImagesService._imageList = data;
              if(data.length > 0) {
                $scope.imageCarouselCtrl.show = true;
              }
            });

        };

//        ImagesService.isImageListPopulated = function() {
//          return $scope.imageCarouselCtrl.show;
//        };
      },
      controllerAs: 'imageCarouselCtrl'
    }
  })

  .directive('imageCarouselUpload', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/carousel-upload.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.slidesUploaded = [];

        this.apply = function(newslides) {
          $scope.imageCarouselUploadCtrl.slidesUploaded = newslides;
          $scope.apply();
        };

      },
      controllerAs: 'imageCarouselUploadCtrl'
    }
  })

  .directive('imageEditTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/table.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.slidesEdit = [];

        this.moveUp = function(sequence) {
          if ( sequence != 1 ) {
            $current = $scope.imageEditTableCtrl.slidesEdit[sequence-1];
            $temp = $scope.imageEditTableCtrl.slidesEdit[sequence-2]

            $scope.imageEditTableCtrl.slidesEdit[sequence-2] = $current;
            $scope.imageEditTableCtrl.slidesEdit[sequence-2].sequence = sequence-1;
            $scope.imageEditTableCtrl.slidesEdit[sequence-1] = $temp;
            $scope.imageEditTableCtrl.slidesEdit[sequence-1].sequence = sequence;


//            $scope.imageCarouselUploadCtrl.slidesUploaded = [];
//
//            for ( var i = 0; i < $scope.imageEditTableCtrl.slidesEdit.length; i++) {
//              $scope.imageCarouselUploadCtrl.slidesUploaded.push($scope.imageEditTableCtrl.slidesEdit[i]);
//            }

            //$scope.imageCarouselUploadCtrl.apply($scope.imageEditTableCtrl.slidesEdit);


            //$scope.imageCarouselUploadCtrl.slidesUploaded[sequence-2] = $current;
            //$scope.imageCarouselUploadCtrl.slidesUploaded[sequence-1] = $temp;

            //$scope.imageCarouselUploadCtrl.slidesUploaded = $scope.imageEditTableCtrl.slidesEdit;
            //$scope.apply();
          }
        }

        this.moveDown = function(sequence) {
          if ( sequence != $scope.imageEditTableCtrl.slidesEdit.length ) {
            $current = $scope.imageEditTableCtrl.slidesEdit[sequence-1];
            $temp = $scope.imageEditTableCtrl.slidesEdit[sequence]

            $scope.imageEditTableCtrl.slidesEdit[sequence] = $current;
            $scope.imageEditTableCtrl.slidesEdit[sequence].sequence = sequence+1;
            $scope.imageEditTableCtrl.slidesEdit[sequence-1] = $temp;
            $scope.imageEditTableCtrl.slidesEdit[sequence-1].sequence = sequence;
          }
        }

      },
      controllerAs: 'imageEditTableCtrl'
    }
  })

  .directive('imageListAndUploader', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/list-and-uploader.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.list = {};
        this.listEmpty = true;
        this._currentView = 'LIST';

        this.isListEmpty = function() {
          if(this.listEmpty) {
            return true;
          } else {
            return false;
          }
        };

        this.getCurrentView = function(view) {
          return this._currentView == view;
        };

        this.setCurrentView = function(view) {
          this._currentView = view;
        };

        ImagesService.imageUploaded = function(image) {
          $scope.imageListAndUploaderCtrl.listEmpty = false;
          var sequence = $scope.imageEditTableCtrl.slidesEdit.length + 1;
          var imageObj = {
            "path" : "/images/upload/",
            "title" : image.file.name,
            "newTitle" : "",
            "description" : "",
            "sequence" : sequence
          };


          //$scope.imageCarouselUploadCtrl.slidesUploaded.push(imageObj);
          $scope.imageEditTableCtrl.slidesEdit.push(imageObj);
        };





      },
      controllerAs: 'imageListAndUploaderCtrl'
    }
  })


  .directive('imageListAndUploaderUpdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/list-and-uploader-update.html',
      controller: function($scope, PackagesService, ImagesService) {
        this.list = {};
        this.listEmpty = true;

        this.isListEmpty = function() {
          if(this.listEmpty) {
            return true;
          } else {
            return false;
          }
        };

        ImagesService.imageUploaded = function(image) {
          var sequence = $scope.imageEditTableCtrl.slidesEdit.length + 1;
          var imageObj = {
            "path" : "/images/upload/",
            "title" : image.file.name,
            "newTitle" : "",
            "description" : "",
            "sequence" : sequence
          };


          //$scope.imageCarouselUploadCtrl.slidesUploaded.push(imageObj);
          $scope.imageEditTableCtrl.slidesEdit.push(imageObj);
        };


      },
      controllerAs: 'imageListAndUploaderUpdateCtrl'
    }
  })



  .directive('imageUploader', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/uploader.html',
      controller: function($scope, PackagesService, FileUploader, ImagesService) {

        $scope.uploader = new FileUploader({
          url: 'index.php/api/v1/image-upload'
        });


        $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
          fileItem.file.name = response;
          ImagesService.imageUploaded(fileItem);
        };


        console.info('uploader', $scope.uploader);


      },
      controllerAs: 'imageUploaderCtrl'
    }
  })



  /**
   * The ng-thumb directive
   * @author: nerv
   * @version: 0.1.2, 2014-01-09
   */
  .directive('ngThumb', ['$window', function($window) {
    var helper = {
      support: !!($window.FileReader && $window.CanvasRenderingContext2D),
      isFile: function(item) {
        return angular.isObject(item) && item instanceof $window.File;
      },
      isImage: function(file) {
        var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    };

    return {
      restrict: 'A',
      template: '<canvas/>',
      link: function(scope, element, attributes) {
        if (!helper.support) return;

        var params = scope.$eval(attributes.ngThumb);

        if (!helper.isFile(params.file)) return;
        if (!helper.isImage(params.file)) return;

        var canvas = element.find('canvas');
        var reader = new FileReader();

        reader.onload = onLoadFile;
        reader.readAsDataURL(params.file);

        function onLoadFile(event) {
          var img = new Image();
          img.onload = onLoadImage;
          img.src = event.target.result;
        }

        function onLoadImage() {
          var width = params.width || this.width / this.height * params.height;
          var height = params.height || this.height / this.width * params.width;
          canvas.attr({ width: width, height: height });
          canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
        }
      }
    };
  }])


;