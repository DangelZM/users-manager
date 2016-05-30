App.Router = Backbone.Router.extend({
    initialize: function (options) {
        this.mainView = options.mainView;
    },
    routes: {
        '': 'homePage',
        'user/:id': 'userDetailPage'
    },

    homePage: function () {
        var usersCollection = new App.Collections.Users();
        usersCollection.fetch({
            success: function(){
                var view = new App.Views.UserList({
                    itemsPerPage: 4,
                    collection: usersCollection
                });
                this.mainView.html(view.render().el);
            }.bind(this)
        });

    },

    userDetailPage: function (id) {
        var user = new App.Models.User({id: id});
        user.fetch({
            success: function(){
                var view = new App.Views.UserDetail({
                    model: user
                });
                this.mainView.html(view.render().el);
            }.bind(this)
        });

    }
});