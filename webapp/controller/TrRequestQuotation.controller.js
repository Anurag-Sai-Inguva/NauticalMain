sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.TrRequestQuotation", {
            onInit: function () {
                
            },
            openCharteringReq:function(){
                var oView = this.getView()
                if(!this.byId('charteringrequest')){
                    Fragment.load({
                        name:"nauticalfe.fragments.TrCharteringRequestFragment",
                        controller:this,
                        id:oView.getId()
                    }).then(function(oDialog){
                        oDialog.open()
                    })
                }
                else{
                    this.byId('charteringrequest').open()
                }
            },
            onPress: function () {
				var oView = this.getView(),
					oButton = oView.byId("button");
				if (!this._oMenuFragment) {
					this._oMenuFragment = Fragment.load({
						name: "nauticalfe.fragments.TrQuoteDropDown",
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
			}

        });
    });