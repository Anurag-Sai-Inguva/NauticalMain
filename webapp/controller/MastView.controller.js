sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.MastView", {
        onInit() {
        },
        voyageType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MasterVoyageType");
        },
        vesselType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MasterVesselType");
        },
        currType:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MasterCurrencyType");
        },
        classMast:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("ClassMaster");
        },
        bidMast:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastBidMaster");
        },
        portUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastPortUpload");
        },
        countryMasterUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastCountryMasterUpload");
        },
        countryMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastCountryMaster");
        },
        apiurl:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastApiUrl");
        }
      });
    }
  );
  