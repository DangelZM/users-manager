App.Models.User = Backbone.Model.extend({
    urlRoot: '/users',
    defaults: {
        "name": "",
        "username": "",
        "email": "",
        "address": {},
        "phone": "",
        "website": "",
        "company": {}
    }
});