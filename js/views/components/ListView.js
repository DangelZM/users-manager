App.Views.List = Backbone.View.extend({
    constructor: function() {
        this.itemClass = {};
        Backbone.View.apply(this, arguments);
    },

    template: _.template($('#list-tpl').html()),

    initialize: function () {
        this.$el.html(this.template());
    },

    render: function(){
        var self = this;
        var list = this.$el.find(".list-group");
        this.collection.forEach(function (item) {
            list.append(new self.itemClass({
                model: item
            }).render().el);
        });
        return this;
    }
});