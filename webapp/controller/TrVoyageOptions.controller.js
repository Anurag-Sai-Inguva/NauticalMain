sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.TrVoyageOptions", {
            onInit: function () {
                var voyage = this.getView().byId("VoyageOperations")
                voyage.addStyleClass("VoyageOperations")

                var heading = this.getView().byId("HeadOptions")
                heading.addStyleClass("HeadOptions")

                // var alloptions = this.getView().byId("alloptions") //for more dropdown
                // alloptions.addStyleClass("alloptions")
            },
            CreateVoyage:function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("TrCreateVoyage")    
            }
        });
    });