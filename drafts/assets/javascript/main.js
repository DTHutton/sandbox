function domReady() {
    document.body.className += ' javascript';
    // code goes here


    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        "hello": function () {
            console.log("My name is Elder Price.");
        }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();








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