define(["backbone", "text!template/rootView.html", "jquery"],
function(Backbone, RootView, $) {
    var View = Backbone.View.extend({
        el: "#content",
        template: RootView,
        render: function() {
            this.$el.html(this.template);
        },
        events: {
            "click button[id=button]": "changeView",
        },
        changeView: function() {
            appRouter.navigate("newView", {trigger: true});
        }
    });
    return View;
});
