sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.Change", {
	
	onInit: function() { 
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/style.css","styleLink");
	},
	
	back: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    },
    
    toNewTaskList: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.task_list.Create"}), true);
    }
});