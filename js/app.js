var startFlow = function () {
    var view = new ModalView();
    var modal = new Backbone.Modal({
        content: view,
        title: "modal header",
        animate: true
    });
    var modalPromise = modal.open();
    return modalPromise;
};

$(document).ready(function () {
    $("#startBtn").click(function () {
        startFlow().then(function(){
            console.log("A");
        }, function(){
            console.log("B");
        });
    });
});
