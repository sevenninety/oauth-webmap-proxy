oauth-webmap
============

Demonstration of OAuth access to an Esri WebMap using a proxy page. This allows OAuth authentication to be done server-side and is therefore seamless to the client application.

1. Register your application in your Portal.
2. Update app/main.js with your Portal url and WebMap ID.
3. Update proxy/proxy.config with valid clientID and clientSecret from your registered application. Also add valid urls to your Portal.

NOTE: The proxy page in this application uses the Esri resource-proxy: https://github.com/Esri/resource-proxy
