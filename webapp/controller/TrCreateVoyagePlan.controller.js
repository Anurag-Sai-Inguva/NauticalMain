sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,Fragment,History) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.TrCreateVoyagePlan", {
            onInit: function () {
              
            },
    
            handleNav: function(evt) {
                var navCon = this.byId("navCon");
                var target = evt.getSource().data("target");
                if (target) {
                    var animation = this.byId("animationSelect").getSelectedKey();
                    navCon.to(this.byId(target), animation);
                } else {
                    navCon.back();
                }
            },
            handleNavToPanelA: function() {
                this.navigateToPanel("panelA");
               },
        
               handleNavToPanelB: function() {
                this.navigateToPanel("panelB");
              },
        
              navigateToPanel: function(panelId) {
                  var navCon = this.byId("navCon2");
                  navCon.to(this.byId(panelId));
              },
              onPress: function () {
				var oView = this.getView(),
					oButton = oView.byId("button");
				if (!this._oMenuFragment) {
					this._oMenuFragment = Fragment.load({
						name: "nauticalfe.fragments.TrVoyageDropDown",
                        id: oView.getId(),
						controller: this
					}).then(function(oMenu) {
						oMenu.openBy(oButton);
						this._oMenuFragment = oMenu;
						return this._oMenuFragment;
					}.bind(this));
				} else {
					this._oMenuFragment.openBy(oButton);
				}
			},
            voyDashboard:function(){
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();
      
                if (sPreviousHash !== undefined) {
                  window.history.go(-1);
                } else {
                  const oRouter = this.getOwnerComponent().getRouter();
                  oRouter.navTo("TrCreateVoyage", {}, true);
                }
             }

    });
})