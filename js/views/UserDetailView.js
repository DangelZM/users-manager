App.Views.UserDetail = Backbone.View.extend({
    template: _.template($("#userDetail-tpl").html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('.address').append(
            new App.Views.Address(this.model.get('address')).render().el);
        return this;
    }
});