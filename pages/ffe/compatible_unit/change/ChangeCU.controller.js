sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.change.ChangeCU", {
	
	onInit: function() {
		console.log("here");
		jQuery.sap.includeStyleSheet("pages/ffe/compatible_unit/change/style.css","styleLink");
	},
	
	back: function() {
    	console.log("here");
    	this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
    }
});