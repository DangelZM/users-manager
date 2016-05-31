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
    },
    validate: function(attrs){
        var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var siteRe = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/;

        if(attrs.email === '') {
            return "Email required!"
        }

        if(!emailRe.test(attrs.email)) {
            return 'Not valid email!';
        }

        if(attrs.website === '') {
            return "Website required!";
        }

        if(!siteRe.test(attrs.website)) {
            return 'Not valid site URL!';
        }
    }
});