(function() {
    var video = document.getElementById('video'),
        vendorURL=window.URL || window.webkitURL;
    navigator.getMedia =    navigator.getUsermedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;

    // Capture video
    navigator.getMedia({
        video: true,
        audio: false
    },function (stream) {
        video.src = vendorURL.createObjectURL(stream);
        video.play();
    }, function (error) {
        //error
        //error.code
    });
})();