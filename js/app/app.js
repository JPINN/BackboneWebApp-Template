/*
    app.js
*/
define([
    "routes/router"
], function (app_router) {
    var initialize = function () {
        // Initialize the router.
        app_router.initialize();
    };
    // Return the initialized application.
    return {
        initialize  :   initialize
    };
});
