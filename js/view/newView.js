define(["backbone", "text!template/newView.html", "jquery"],
function(Backbone, NewView, $) {
    var View = Backbone.View.extend({
        el: "#content",
        template: NewView,
        render: function() {
            this.$el.html(this.template);
        },
        events: {
            "click button[id=button]": "changeView",
        },
        changeView: function() {
            appRouter.navigate("rootView", {trigger: true});
        }
    });
    return View;
});
