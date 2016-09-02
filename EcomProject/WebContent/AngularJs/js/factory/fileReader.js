var fileReader = function ($q, $log) {
 
        var onLoad = function(reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };
 
        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };
 
        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
 
        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };
 
        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();
            var reader = getReader(deferred, scope);         
            reader.readAsDataURL(file);
            return deferred.promise;
        };
        var getBase64Image = function(img) {
    	    var canvas = document.createElement("canvas");
    	    canvas.width = img.width;
    	    canvas.height = img.height;

    	    var ctx = canvas.getContext("2d");
    	    var imgObj = new Image();
    	  ctx.drawImage(img, 0, 0);

    	    var dataURL = canvas.toDataURL("image/png");

    	    return dataURL.replace(/^data:image\/(jpg);base64,/, "");
    	}
 
        return {
            readAsDataUrl: readAsDataURL,
            getBase64Image: getBase64Image
        };
}
 
 