sap.ui.controller("pge.ffe.pages.ffe.compatible_unit.technical_object.CreateTechObj", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {
	//	this._oView = this.getView();
	//	var oItemTemplate = this.byId("columnListItem").clone();
	//	this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
	//	this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
	//	this._oRouter = this._oComponent.getRouter();
	//	this._oCatalog = this.byId("catalogTable");

	//	this._initViewPropertiesModel();
	},
	
	back: function(){
		this.getView().getParent().setContent(new sap.ui.core.mvc.XMLView({id:"createCU", viewName:"pge.ffe.pages.ffe.compatible_unit.create.CreateCU"}), true);                         
	}

});