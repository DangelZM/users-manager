App.Views.UserDetail = Backbone.View.extend({
    template: _.template($("#userDetail-tpl").html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('.email').append(
          new App.Views.EditableAttr({
              model: this.model,
              attr: 'email',
              placeholder: 'Email'
          }).render().el
        );
        this.$el.find('.website').append(
            new App.Views.EditableAttr({
                model: this.model,
                attr: 'website',
                placeholder: 'Website URL'
            }).render().el
        );
        this.$el.find('.address').append(
            new App.Views.Address(this.model.get('address')).render().el);
        return this;
    }
});