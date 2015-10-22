/*
    Boilerplate main.js
*/
require.config({
    paths: {
        jquery      :   "lib/jquery/jquery",
        bootstrap   :   "lib/bootstrap/bootstrap",
        parse       :   "lib/parse/parse",
        backbone    :   "lib/backbone/backbone",
        underscore  :   "lib/underscore/underscore",
        text        :   "lib/text/text"
    }
});

require([
    "router/router", "parse", "backbone"
], function (AppRouter, Parse, Backbone) {
    Parse.initialize(
        "tXonU1MhumMT3Fo2yrI96jV0f75JA9EExsSn5jKO", "v35br82tT227BVVLRvHIPZfMbqm1wB6grabvxaMs"
    );
    window.appRouter = AppRouter;
    Backbone.history.start();
});
