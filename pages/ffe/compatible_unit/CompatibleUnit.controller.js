sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.CompatibleUnit", {
    	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf pge.ffe.view.Home
	 */
		onInit: function() {
			jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/style.css","styleLink");
			
			var CUModel = new sap.ui.model.json.JSONModel("/pages/ffe/compatible_unit/CUData.json");
			var oTable = this.byId("CUTable");
			oTable.setModel(CUModel);
			oTable.bindRows("/rows");
			
			oTable.addColumn(new sap.ui.table.Column({
			    label: new sap.ui.commons.Label({text: "CU ID"}), 
			    template: new sap.ui.commons.TextView({text:"{CUID}"})
			}));
			
			oTable.addColumn(new sap.ui.table.Column({
			    label: new sap.ui.commons.Label({text: "Description"}), 
			    template: new sap.ui.commons.TextView({text:"{DESC}"})
			}));
			
			oTable.addColumn(new sap.ui.table.Column({
			    label: new sap.ui.commons.Label({text: "Status"}), 
			    template: new sap.ui.commons.TextView({text:"{STATUS}"})
			}));
			
			oTable.addColumn(new sap.ui.table.Column({
			    label: new sap.ui.commons.Label({text: "Category"}), 
			    template: new sap.ui.commons.TextView({text:"{CATEGORY}"})
			}));
			
		},
		
		
		toCreate: function() {
			this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"createCU", viewName:"pge.ffe.pages.ffe.compatible_unit.CreateCU"}), true);                         
		},
		 
		toChange: function() {
			this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"changeCU", viewName:"pge.ffe.pages.ffe.compatible_unit.Change"}), true);
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