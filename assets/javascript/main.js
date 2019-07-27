function domReady() {
    document.body.className += ' javascript';
    // code goes here
    document.addEventListener("click", function (event) {
        if (!event.target.matches("#button")) return;
        event.preventDefault();
        console.log(event.target);

        let image = new Image();
        image.src = "assets/images/transport.jpg";
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        let row, imageWidth, imageHeight;

        image.onload = function () {
            imageWidth = image.width;
            imageHeight = image.height;
            row = imageHeight;
            requestAnimationFrame(animate);
        };

        function animate() {
            context.drawImage(image, 1, row, imageWidth, 1, 0, 0, imageWidth, row);
            if (row > 0) row--;
            requestAnimationFrame(animate);
        }
        
    });







}
// Mozilla, Opera, Webkit
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        domReady();
    },
        false);
    // If IE event model is used
} else if (document.attachEvent) {
    // ensure firing before onload
    document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') {
            document.detachEvent('onreadystatechange', arguments.callee);
            domReady();
        }
    });
}