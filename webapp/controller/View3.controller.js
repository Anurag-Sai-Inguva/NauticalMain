sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.View3", {
            onInit: function () {
                var oView = this.getView();
            },
                onCreateVoyage: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
            perTonChanges:function(){
                var oView = this.getView();
                var propFrieghtCost = oView.byId("inputProposedFreightCost").getValue()
                var cargoWeight = oView.byId("field3").getValue() //fetching cargo weight value
                var frieghtandTotalCost = propFrieghtCost*cargoWeight
                oView.byId("field4").setValue(frieghtandTotalCost.toFixed(2))
                oView.byId("field6").setValue(frieghtandTotalCost.toFixed(2))
                oView.byId("inputTotalCost").setValue(propFrieghtCost.toFixed(2))
            },
            perLumpsum:function(){
                var propFrieghtCost = oView.byId("inputProposedFreightCost1").getValue()
                var frieghtandTotalCost = propFrieghtCost //both frieghtandTotalCost and propFrieghtCost are equal in lumpsum
                oView.byId("field24").setValue(frieghtandTotalCost.toFixed(2))
                oView.byId("field26").setValue(frieghtandTotalCost.toFixed(2))
                oView.byId("inputTotalCost1").setValue(propFrieghtCost.toFixed(2))
            },
            perNauticalChange:function(){
                var propFrieghtCost = oView.byId("inputProposedFreightCost2").getValue()
                var distance = oView.byId("field28").getValue()//fetching distance
                var cargoWeight = oView.byId("field29").getValue() //fetching cargo weight value
                var frieghtandTotalCost = propFrieghtCost*cargoWeight*distance
                oView.byId("field24").setValue(frieghtandTotalCost)
                oView.byId("field26").setValue(frieghtandTotalCost)
                oView.byId("inputTotalCost2").setValue(frieghtandTotalCostx.toFixed(2))
            }
        });
});
 
            
        
    
