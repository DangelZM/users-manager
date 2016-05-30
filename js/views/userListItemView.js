App.Views.UserListItem = Backbone.View.extend({
    className: 'user-item list-group-item',
    template: _.template($('#userListItem-tpl').html()),

    events: {
        'click a' : 'navigate'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    navigate: function(e){
        e.preventDefault();
        App.router.navigate($(e.currentTarget).attr('href'), {trigger: true});
        return false;
    }

});