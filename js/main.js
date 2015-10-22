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
    "app/app"
], function (App) {
    App.initialize();
});
