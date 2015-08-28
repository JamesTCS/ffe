sap.ui.controller("pge.ffe.pages.home.Home", {
    
    handlePressConfiguration: function(oEvent) {
		var oItem = oEvent.getSource();
		var oShell = this.getView().byId("myShell");
		var bState = oShell.getShowPane();
		oShell.setShowPane(!bState);
		oItem.setShowMarker(!bState);
		oItem.setSelected(!bState);
	},

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pge.ffe.view.Home
	 */
		onInit: function() {
			console.log("here");
			jQuery.sap.includeStyleSheet("pages/home/style.css","styleLink");
			
		}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf pge.ffe.view.Home
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf pge.ffe.view.Home
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf pge.ffe.view.Home
	 */
	//	onExit: function() {
	//
	//	}

});