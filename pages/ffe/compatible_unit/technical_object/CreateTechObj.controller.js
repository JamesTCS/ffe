sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.technical_object.CreateTechObj", {

	onInit: function() {

	},
	
	back: function(){
		this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"createCU", viewName:"pge.ffe.pages.ffe.compatible_unit.CreateCU"}), true);                         
	}

});