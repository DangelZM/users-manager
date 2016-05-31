App.Views.EditableAttr = Backbone.View.extend({
    className: 'editableAttr',
    template: _.template($('#editableAttr-tpl').html()),

    events: {
        'click .edit-btn': 'editState',
        'click .save-btn': 'update',
        'keypress .attr-input': 'updateOnEnter'
    },

    initialize: function (options) {
        _.extend(this, options);
        this.model.on('change:' + this.attr, this.render, this);
    },

    render: function(){
        this.$el.html('');
        this.$el.html(this.template({
            attrVal: this.model.get(this.attr),
            placeholder: this.placeholder
        }));
        return this;
    },

    editState: function () {
        this.$el.addClass('editing');
        this.$el.find('.attr-input').focus();
    },

    update: function () {
        this.$el.find('.text-danger').remove();
        var data = {};
        data[this.attr] = this.$el.find('.attr-input').val();
        if(!this.model.save(data)){
            this.$el.append('<span class="text-danger">'+ this.model.validationError +'</span>');
        } else {
            this.$el.removeClass('editing');
        }
    },

    updateOnEnter: function (e) {
        if(e.keyCode == 13) this.update();
    }

});