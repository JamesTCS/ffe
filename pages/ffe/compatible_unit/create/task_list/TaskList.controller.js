sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.create.task_list.TaskList", {
	
	onInit: function() {
		console.log("here");
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/create/task_list/style.css","styleLink");
	},
	
	back: function() {
    	//this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    }
});