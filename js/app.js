var ModalBody = Backbone.View.extend({
    tagName: 'p',
    template: 'this is modal content',
    render: function () {
        this.$el.html(this.template);
        return this;
    }
});

var startFlow = function () {
    var view = new ModalBody();
    var modal = new Backbone.Modal({
        content: view,
        title: "modal header",
        animate: true
    });
    var modalPromise = modal.open();
    return modalPromise;
};

$(document).ready(function () {
    var startBtn = $("#startBtn"),
        resultBox = $("#result");
    startBtn.click(function () {
        startFlow().then(function(){
            resultBox.html("resolved").removeClass("text-danger").addClass("text-success");
        }, function(){
            resultBox.html("rejected").removeClass("text-success").addClass("text-danger");
        });
    });
});
