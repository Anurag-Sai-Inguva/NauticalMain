sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.View2", {
            onInit: function () {
                var oView = this.getView();

      // Button event handlers
      // oView.byId("_IDGenButton1").attachPress(function () {
      //   alert("Create Voyage button clicked!");
      // });
    },
    frieghtnavigate:function(){
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteView3");
    },
    
    
  });
});
 
            
        
    
