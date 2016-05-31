App.Router = Backbone.Router.extend({
    initialize: function (options) {
        this.mainView = options.mainView;
    },
    routes: {
        '': 'homePage',
        'user/:id': 'userDetailPage',
        '*action': 'pageNotFound'
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

    },

    pageNotFound: function () {
        this.mainView.html('<div class="alert alert-warning" role="alert">Sorry, the page you requested was not found!</div>');
    }
});