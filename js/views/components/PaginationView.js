App.Views.Pagination = Backbone.View.extend({
    tagName: 'nav',

    events: {
      'click a': 'open'
    },

    initialize: function (options) {
        this.activePage = 1;
        this.parent = options.parent;
        this.total = options.total;
        this.perPage = options.perPage;
        this.pageCount = Math.ceil(this.total/this.perPage);
    },

    setActivePage: function (page) {
        this.activePage = page;
    },

    render:function () {
        $(this.el).html('<ul class="pagination" />');
        for (var i=0; i < this.pageCount; i++) {
            $('ul', this.el).append('<li' + ((i + 1) === this.activePage ? ' class="active"' : '') + '><a data-page="' + (i+1) + '" href="#">' + (i+1) + '</a></li>');
        }
        return this;
    },

    open: function(e){
        e.preventDefault();
        this.trigger('open:page', $(e.currentTarget).data("page"));
        return false;
    }
});