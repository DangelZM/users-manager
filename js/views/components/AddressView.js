App.Views.Address = Backbone.View.extend({
    tagName: 'span',
    template: _.template("{{street}} {{suite}} {{city}}, {{zipcode}}"),

    initialize: function (address) {
        this.model = address;
    },

    render: function(){
        this.$el.html(this.template(this.model));
        return this;
    }
});