App.Views.ListWithPagination = App.Views.List.extend({
    initialize: function (options) {
        this.itemsPerPage = options.itemsPerPage || App.Defaults.itemsPerPage;
        this.totalItems = this.collection.length;
        this.pagination = new App.Views.Pagination({
            parent: this,
            perPage: this.itemsPerPage,
            total: this.totalItems
        });
        this.listenTo(this.pagination, 'open:page', this.render);
        App.Views.List.prototype.initialize.call(this);
    },
    render: function(page){
        var self = this;
        var p = page ? parseInt(page, 10) : 1;
        var list = this.$el.find(".list-group");
        list.html('');
        this.getItemsForPage(p).forEach(function (item) {
            list.append(new self.itemClass({ model: item }).render().el);
        });
        this.pagination.setActivePage(p);
        this.$el.append(this.pagination.render().el);
        return this;
    },
    getItemsForPage: function (page) {
        var start = (page - 1) * this.itemsPerPage;
        var end = Math.min(start + this.itemsPerPage, this.totalItems);
        return this.collection.slice(start, end);
    }
});