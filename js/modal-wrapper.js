(function($, _, Backbone) {
    var ModalWrapper = function ModalWrapper(options){
        // create original backbone/bootstrap-modal from the plugin
        var modal = new Backbone.BootstrapModal(options);
        // create internal modal deferred and attach async actions
        var dfd = $.Deferred();
        modal.on("ok", function(){
            dfd.resolve();
        });
        modal.on("cancel", function(){
            dfd.reject();
        });
        // wrap original open function to return the deferred object
        var _open = modal.open;
        modal.open = function(){
            _open.apply(modal, arguments);
            return dfd.promise();
        };
        return modal;
    };

    Backbone.Modal = ModalWrapper;
})(jQuery, _, Backbone);
