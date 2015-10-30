(function($, _, Backbone) {
    var Modal = function Modal(options){
        // create original backbone/bootstrap-modal from the plugin
        var modal = new Backbone.BootstrapModal(options);
        // create internal modal deferred and attach async actions
        var modalDfd = $.Deferred();
        var positiveStatus;
        modal.on("ok", function(){
            positiveStatus = true;
        });
        modal.on("cancel", function(){
            positiveStatus = false;
        });
        // hacking internals
        modal.$el.on("hidden.bs.modal", function(){
            if (positiveStatus) {
                modalDfd.resolve();
            } else {
                modalDfd.reject();
            };
        });
        // wrap original open function to return the deferred object
        var _open = modal.open;
        modal.open = function(){
            _open.apply(modal, arguments);
            return modalDfd.promise();
        };
        return modal;
    };

    Backbone.Modal = Modal;
})(jQuery, _, Backbone);
