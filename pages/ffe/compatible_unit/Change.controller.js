sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.Change", {
	
	onInit: function() { 
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/style.css","styleLink");
		
		//Sub Items Table
		var subItemsModel = new sap.ui.model.json.JSONModel("/pages/ffe/compatible_unit/SubItems.json");
		var oTable = this.byId("subItemsTable");
		oTable.setModel(subItemsModel);
		oTable.bindRows("/subitems");
		
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "Item"}), 
		    template: new sap.ui.commons.TextView({text:"{ITEM}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "Type"}), 
		    template: new sap.ui.commons.TextView({text:"{TYPE}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "CU Number"}), 
		    template: new sap.ui.commons.TextView({text:"{CUNUMBER}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "CU Description"}), 
		    template: new sap.ui.commons.TextView({text:"{CUDESC}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "NrC"}), 
		    template: new sap.ui.commons.TextView({text:"{NrC}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "Quantity"}), 
		    template: new sap.ui.commons.TextView({text:"{QUANTITY}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.ui.commons.Label({text: "Unit"}), 
		    template: new sap.ui.commons.TextView({text:"{UNIT}"})
		}));
	},
	
	back: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    },
    
    toNewTaskList: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.task_list.Create"}), true);
    },
    
   toCreateFL: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.functional_location.CreateFL"}), true);
    },
    
     toDisplayMaterial: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.display_material.DisplayMaterial"}), true);
    },
    
    toCreateClassification: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.classification.Create"}), true);
    }
});
