jQuery.sap.declare("pge.ffe.Component");

sap.ui.core.UIComponent.extend("pge.ffe.Component", {
   
   createContent : function() {
       var oShell = new sap.ui.ux3.Shell("myShell", {
		appTitle: "",  // Pacific Gas & Electric
		appIcon: "images/pge_header.png",
		appIconTooltip: "Pacific Gas & Electric",
		showLogoutButton: true,
		showSearchTool: false,
		showInspectorTool: true,
		showFeederTool: false,
		headerType: "Standard",
		deseignType: "Standard",
		worksetItems: [
					   new sap.ui.ux3.NavigationItem("home",{key:"home",text:"Home"}),
					   new sap.ui.ux3.NavigationItem("create",{key:"create",text:"Estimate Dashboard", subItems:[
						  new sap.ui.ux3.NavigationItem("find",{key:"find",text:"Compatible Unit"}),
						  new sap.ui.ux3.NavigationItem("design_dashboard",{key:"design_dashboard",text:"Design Dashboard"}),
						  new sap.ui.ux3.NavigationItem("ade",{key:"ade",text:"Work Order"})]}),
					   new sap.ui.ux3.NavigationItem("ccbs",{key:"ccbs",text:"CCBS"}),
		               new sap.ui.ux3.NavigationItem("admin",{key:"admin",text:"Admin Tools", subItems:[
		                  new sap.ui.ux3.NavigationItem("tools",{key:"tools",text:"Maintenance Tools"}),
		                  new sap.ui.ux3.NavigationItem("saved",{key:"saved",text:"Saved Cart Manager"}),
		                  new sap.ui.ux3.NavigationItem("bug",{key:"bug",text:"Add Bug Reports & User Comments"}),
		                  new sap.ui.ux3.NavigationItem("trench",{key:"trench",text:"View Trench Rates"}),
		                  new sap.ui.ux3.NavigationItem("ccbs2",{key:"ccbs",text:"CCBS Home Screen"})]}),
		               new sap.ui.ux3.NavigationItem("help",{key:"help",text:"Training & Help Tools"})],
		paneBarItems: [ 
		                new sap.ui.core.Item("siteMapButton",{key:"site_map",text:"Site Map"})],
		//content: oHTML,
		/*toolPopups: [new sap.ui.ux3.ToolPopup("contactTool",{
									title: "New Contact",
									tooltip: "Create New Contact",
									icon: "images/Contact_regular.png",
									iconHover: "images/Contact_hover.png",
									content:[new sap.ui.commons.TextView({text:"Here could be a contact sheet."})],
									buttons: [new sap.ui.commons.Button("cancelContactButton", {text:"Cancel",press:function(oEvent){
										sap.ui.getCore().byId("contactTool").close();
									}})]
								})], */
		headerItems: [new sap.ui.commons.TextView({text:"User Name",tooltip:"U.Name"}),
		              new sap.ui.commons.Button({text:"Personalize",tooltip:"Personalize",press:function(oEvent){alert("Here could open an personalize dialog");}}),
									new sap.ui.commons.MenuButton({
										text: "Help",
										tooltip: "Help Menu",
										menu: new sap.ui.commons.Menu("menu1",{items:[
											new sap.ui.commons.MenuItem("menuitem1",{text:"Help"}),
											new sap.ui.commons.MenuItem("menuitem2",{text:"Report Incident"}),
											new sap.ui.commons.MenuItem("menuitem3",{text:"About"})]})
									})],
									
		
		worksetItemSelected: function(oEvent){
			var sId = oEvent.getParameter("id");
			var oShell = oEvent.oSource;
		
			switch (sId) {
			case "home":
				oShell.setContent(new sap.ui.core.mvc.XMLView({id:"homepage", viewName:"pge.ffe.pages.home.Home"}), true);
				break;
			case "find":
				oShell.setContent(new sap.ui.core.mvc.XMLView({id:"compatibleUnit", viewName:"pge.ffe.pages.ffe.compatible_unit.CompatibleUnit"}), true);
				break;
			case "tools":
				oShell.setContent(new sap.ui.commons.Label("adminLabel", {text: "Here are the Admin Tools!"}), true);
				break;
			case "help":
				oShell.setContent(new sap.ui.commons.Label("helpLabel2", {text: "This Page Can Help You!"}), true);
				break;
			case "design_dashboard":
				oShell.setContent(new sap.ui.core.mvc.XMLView({id:"designDashboard", viewName:"pge.ffe.pages.ffe.design_dashboard.DesignDashboard"}), true);
				break;
			default:
				break;
			}
		},
		paneBarItemSelected: function(oEvent){
			var sKey = oEvent.getParameter("key");
			var oShell = oEvent.oSource;
			switch (sKey) {
			case "site_map":
				oShell.setPaneContent(new sap.ui.core.mvc.XMLView({id:"siteMap", viewName:"pge.ffe.pages.home.SiteMap"}), true);
				break;
			default:
				break;
			}
		},
		logout:function(){
			alert("Logout Button has been clicked.\nThe application can now do whatever is required.");
		},
	 	search:function(oEvent){
	 		alert("Search triggered: " + oEvent.getParameter("text"));
	 	},
	 	feedSubmit:function(oEvent){
	 		alert("Feed entry submitted: " + oEvent.getParameter("text"));
	 	},
	 	paneClosed : function(oEvent) {
	 	    //alert("Pane has been closed: " + oEvent.getParameter("id"));
	 	}
	});
	//set initial home screen
	oShell.setContent(new sap.ui.core.mvc.XMLView({id:"homepage", viewName:"pge.ffe.pages.home.Home"}), true);
	
	return oShell;
  }
   
});