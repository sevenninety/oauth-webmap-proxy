define([
	"dojo/ready",
	"esri/arcgis/utils",
	"esri/urlUtils"], 
	function(ready, arcgisUtils, urlUtils) { 
		var handle;
		
		ready(function() {
			// Add a rule to access the webmap
			urlUtils.addProxyRule({
		        urlPrefix: "YOUR_PORTAL",
		        proxyUrl: "proxy/proxy.ashx"
		    });

			// Add a rule to access the feature service in the webmap
			urlUtils.addProxyRule({
		        urlPrefix: "services.arcgis.com",
		        proxyUrl: "proxy/proxy.ashx"
		    });

			// Define the portal
			arcgisUtils.arcgisUrl = "//YOUR_PORTAL/sharing/content/items";

			// Create the webmap
			arcgisUtils.createMap("YOUR_WEBMAP_ID", "map").then(function(response) {
				console.log("Loaded");
			}, function(error) {
				console.log("Error occurred while creating map: ", error);
			});
		}
	);
});