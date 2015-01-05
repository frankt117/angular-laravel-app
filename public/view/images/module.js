angular.module( 'app.images', ['app.images-service', 'users', 'angularFileUpload'])

  .directive('imageCarousel', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/carousel.html',
      controller: ["$scope", "PackagesService", "ImagesService", function($scope, PackagesService, ImagesService) {
        this.slides = ImagesService.getImageList();
        this.show = false;

      }],
      controllerAs: 'imageCarouselCtrl'
    }
  })

  .directive('imageCarouselUpload', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/carousel-upload.html',
      controller: ["$scope", "PackagesService", "ImagesService", function($scope, PackagesService, ImagesService) {
        this.slidesUploaded = [];

        this.apply = function(newslides) {
          $scope.imageCarouselUploadCtrl.slidesUploaded = newslides;
          $scope.apply();
        };

      }],
      controllerAs: 'imageCarouselUploadCtrl'
    }
  })

  .directive('imageEditTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/table.html',
      controller: ["$scope", "PackagesService", "ImagesService", function($scope, PackagesService, ImagesService) {
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

        this.remove = function(image) {
          ImagesService.deleteImageFromUpdateList(image)
            .success(function(data, header) {
              var temp = [];
              var currentSequence = 1;

              for (var i = 0; i < $scope.imageEditTableCtrl.slidesEdit.length; i++ ) {
                if ( $scope.imageEditTableCtrl.slidesEdit[i].sequence != image.sequence ) {
                  $scope.imageEditTableCtrl.slidesEdit[i].sequence = currentSequence;
                  temp.push($scope.imageEditTableCtrl.slidesEdit[i]);
                  currentSequence += 1;
                }
              }

              $scope.imageEditTableCtrl.slidesEdit = temp;
            });

        }

        this.findImagesInListBySequence = function(sequenceId) {
          var images = [];

          for (var i = 0; i < this.slidesEdit.length; i++ ) {
            if ( this.slidesEdit[i].sequence == sequenceId ) {
              images.push(this.slidesEdit[i]);
            }
          }

          return images;
        }

        this.findLargestSequenceInList = function() {
          var largest = 0;

          for (var i = 0; i < this.slidesEdit.length; i++ ) {
            if ( this.slidesEdit[i].sequence > largest ) {
              largest = this.slidesEdit[i].sequence;
            }
          }

          return largest;
        }

        this.sortImageList = function() {
          console.log("SORTING : ");
          console.log(this.slidesEdit);

          var tempList = [];
          var currentSequence = 1;
          var largest = this.findLargestSequenceInList();
          var size = this.slidesEdit.length;

          if (largest > size) {
            size = largest;
          }

          for ( var i = 0; i < size; i++ ) {
            var images = this.findImagesInListBySequence(i+1);
            console.log(i+" IMAGES =");
            console.log(images);

            if (images.length > 0) {
              for (var x = 0; x < images.length; x++) {
                var image = { "id" : images[x].id, "description" : images[x].description, "fromDb" : images[x].fromDb, "newTitle" : images[x].newTitle, "path" : images[x].path, "sequence" : images[x].sequence, "title" : images[x].title};
                image.sequence = currentSequence;
                //images[x].sequence = currentSequence;
                tempList.push(image);
                currentSequence += 1;
              }
            }
          }

          console.log("FINAL SORT:");
          console.log(tempList);

          $scope.imageEditTableCtrl.slidesEdit = tempList;
        }

      }],
      controllerAs: 'imageEditTableCtrl'
    }
  })

  .directive('imageListAndUploader', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/list-and-uploader.html',
      controller: ["$scope", "PackagesService", "ImagesService", function($scope, PackagesService, ImagesService) {
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





      }],
      controllerAs: 'imageListAndUploaderCtrl'
    }
  })


  .directive('imageListAndUploaderUpdate', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/list-and-uploader-update.html',
      controller: ["$scope", "PackagesService", "ImagesService", function($scope, PackagesService, ImagesService) {
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
            "sequence" : sequence,
            "new" : true
          };


          //$scope.imageCarouselUploadCtrl.slidesUploaded.push(imageObj);
          $scope.imageEditTableCtrl.slidesEdit.push(imageObj);
        };

        ImagesService.deleteImageFromUpdateList = function(image) {
          return ImagesService.deleteImage(image.id);
        }

        this.update = function() {
          console.log("UPDATING IMAGES!!!!!!!!!!!!!!!");
          console.log($scope.imageEditTableCtrl.slidesEdit);
          var images = $scope.imageEditTableCtrl.slidesEdit;

          var newFromDate = new Date();
          var effectiveFrom = newFromDate.getFullYear()+'-'+(newFromDate.getMonth()+1)+'-'+newFromDate.getDate();

          for ( var i = 0; i < images.length; i++ ) {
            var pathURL = images[i].path+images[i].title;
            var id = '';

            if (images[i].id) {
              id = images[i].id;
            }

            if (id == '') {
              var imageObj = {'title' : images[i].newTitle, 'description' : images[i].description, 'path' : pathURL, 'package_id' : $scope.selectedPackage.id,
                'sequence' : images[i].sequence, 'effective_from' :  effectiveFrom, 'effective_to' : ''};
            } else {
              var imageObj = {'title' : images[i].newTitle, 'description' : images[i].description, 'path' : pathURL, 'package_id' : $scope.selectedPackage.id,
                'sequence' : images[i].sequence, 'effective_from' :  effectiveFrom, 'effective_to' : '', 'id' : id};
            }

            ImagesService.createImage(imageObj)
              .success(function(data, header) {
                console.log("IMAGE RECORD UPDATED")
              })
              .error(function(data, header) {
                console.log("ERROR WITH IMAGE RECORD UPDATE");
                console.log(data);
              });
          }

        }


      }],
      controllerAs: 'imageListAndUploaderUpdateCtrl'
    }
  })



  .directive('imageUploader', function() {
    return {
      restrict: 'E',
      templateUrl: 'view/images/uploader.html',
      controller: ["$scope", "PackagesService", "FileUploader", "ImagesService", function($scope, PackagesService, FileUploader, ImagesService) {

        $scope.uploader = new FileUploader({
          url: 'index.php/api/v1/image-upload'
        });


        $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
          fileItem.file.name = response;
          ImagesService.imageUploaded(fileItem);
        };


        console.info('uploader', $scope.uploader);


      }],
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