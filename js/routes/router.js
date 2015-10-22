/*
    router.js
*/
define([
    "backbone",
    "parse"
], function (Backbone, Parse) {
    var AppRouter = Backbone.Router.extend({
        routes : {
            // Declare routes here:

            // Declare the default route.
            "*actions"  :   "showRootApplicationView"
        }
    });

    var initialize = function () {
        // Initialize Parse.
        Parse.initialize(
            "tXonU1MhumMT3Fo2yrI96jV0f75JA9EExsSn5jKO", "v35br82tT227BVVLRvHIPZfMbqm1wB6grabvxaMs"
        );

        var app_router = new AppRouter();

        // Define the default route.
        app_router.on("route:showRootApplicationView", function () {
            // Load the root view of the application.
        });
        // Start the recording the application route history.
        Backbone.history.start();
    };
    // Return the initialization function.
    return {
        initialize  :   initialize
    };
});
