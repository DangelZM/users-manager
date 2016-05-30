window.App = {
    API_URL: 'http://jsonplaceholder.typicode.com',
    Defaults: {
        itemsPerPage: 5
    },
    Views: {},
    Models: {},
    Collections: {}
};

var sync = Backbone.sync;
Backbone.sync = function(method, model, options){
    options.beforeSend = function(){
        this.url = App.API_URL + this.url;
    };
    return sync.call(this, method, model, options);
};

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

$(function() {
    App.router = new App.Router({
        mainView: $('#main-view')
    });
    Backbone.history.start({pushState: true});
});