App.Views.UserList = App.Views.ListWithPagination.extend({
    initialize: function() {
        this.itemClass = App.Views.UserListItem;
        App.Views.ListWithPagination.prototype.initialize.apply(this, arguments);
    }
});