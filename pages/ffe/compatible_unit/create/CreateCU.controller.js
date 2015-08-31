sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.create.CreateCU", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf structure_list.StructureList
*/
//	onInit: function() {
//
//	},

    toStructureList: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"structureList", viewName:"pge.ffe.pages.ffe.compatible_unit.create.structure_list.StructureList"}), true);
    },
    
    toDisplayMaterial: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"displayMaterial", viewName:"pge.ffe.pages.ffe.compatible_unit.create.display_material.DisplayMaterial"}), true);
    },
    
    back: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    },
    
    save: function() {
		console.log("save");    	
    },
    
    saveAndExit: function() {
    	console.log("Save and Exit");
    }

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf structure_list.StructureList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf structure_list.StructureList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf structure_list.StructureList
*/
//	onExit: function() {
//
//	}

});