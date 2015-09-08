sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.task_list.Create", {
	
	onInit: function() {
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/task_list/style.css","styleLink");
	},
	
	back: function() {
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"createCU", viewName:"pge.ffe.pages.ffe.compatible_unit.CreateCU"}), true);
    }
});