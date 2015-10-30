var ModalView = Backbone.View.extend({
    tagName: 'p',
    template: 'this is modal content',
    render: function () {
        this.$el.html(this.template);
        return this;
    }
});

$(document).ready(function () {
    $('#startBtn').click(function () {
        var view = new ModalView();
        var modal = new Backbone.BootstrapModal({
            content: view,
            title: 'modal header',
            animate: true
        });
        modal.open(function () {
            console.log('clicked OK')
        });
    });
});
