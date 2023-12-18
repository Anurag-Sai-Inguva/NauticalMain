sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/routing/History",
      "sap/ui/core/Fragment"
  ],
  function(BaseController,History,Fragment) {
    "use strict";

    return BaseController.extend("nauticalfe.controller.MastCountryMaster", {
      onInit() {
      },
      MastPage:function(){
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        }
        else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastView", {}, true);
        }
     },
     onPress: function () {
      var oView = this.getView(),
        oButton = oView.byId("button");
      if (!this._oMenuFragment) {
        this._oMenuFragment = Fragment.load({
          name: "nauticalfe.fragments.MastOptionsDropDown",
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
    newEntry:function(){
      this.getView().byId("maintable").setVisible(false)
      this.getView().byId("entrytable").setVisible(true)
    },
    createEntry:function(){
        // var value =  this.getView().byId("value").getValue()
        // var fielddesc = this.getView().byId("fieldDesc").getValue();
        // var data = {
        //     Country:value,
        //     Portn:fielddesc
        // };
        //   var odataModel = this.getView().getModel()
        //   odataModel.create("/MARINE_TRAFFIC_API_SRV",data,null,{
        //     success:function(){
        //       MessageBox.success("Data created")
        //       odataModel.refresh();
        //     },
        //     error:function(){
        //       MessageBox.error("Error")
        //     }
        //   })
 
          this.getView().byId("maintable").setVisible(true)
          this.getView().byId("entrytable").setVisible(false)
      },
      deleteEntry:function(){
        var countryedit = this.getView().getId("Countryedit").getValue()
        var idSelect = countryedit.getBindingContextPath().slice(3,-2)
        var path = "/MARINE_TRAFFIC_API_SRV('" + idSelect + "')"
        var odataModel = this.getView().getModel();
        odataModel.remove(path,{
          success:(data,response)=>{
            alert("Deletion Success")
            odataModel.refresh()
          },
          error:function(){
            alert("Deletion failed")
          }
        })
      }
    });
  }
);