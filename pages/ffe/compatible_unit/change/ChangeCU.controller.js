sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.change.ChangeCU", {
	
	onInit: function() { 
		console.log("hello/1");
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/change/style.css","styleLink");
	},
	
	back: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    },
    
    toNewTaskList: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"taskList", viewName:"pge.ffe.pages.ffe.compatible_unit.task_list.TaskList"}), true);
    }
});