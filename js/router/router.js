/*
    router.js
*/
define([
    "backbone",
    "parse",
    "views/rootView",
    "views/newView",
    //include all views that will be navigated too

], function (Backbone, Parse, RootView, NewView) {
    var AppRouter = Backbone.Router.extend({
        routes : {
            // Declare routes here:
            "index"     :   "showRootApplicationView",
            "newView"   :   "newView",
            // Declare the default route.
            "*actions"  :   "showRootApplicationView",
        }
    });
    var appRouter = new AppRouter;
    appRouter.on("route:showRootApplicationView", function(actions) {
        var rootView = new RootView;
        rootView.render();
    });
    appRouter.on("route:newView", function(actions) {
        var newView = new NewView;
        newView.render();
    });

    return appRouter;
});
