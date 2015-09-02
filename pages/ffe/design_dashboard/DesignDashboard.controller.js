sap.ui.controller("pge.ffe.pages.ffe.design_dashboard.DesignDashboard", {
	
	onInit: function() {
		console.log("here");
		jQuery.sap.includeStyleSheet("pages/ffe/design_dashboard/style.css","styleLink");
	},
	
	back: function() {
    	console.log("here");
    	//this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    }
});