// --------------------------------------------------------------------------------------------
	// Copyright (c) Microsoft Corporation. All rights reserved.
	// Licensed under the MIT license.
	// --------------------------------------------------------------------------------------------

	// Created by Oryx
	try 
	{
		var appInsights = require('applicationinsights');
		var prefixInternalSdkVersion = function (envelope, contextObjects) {
			try {
				var appInsightsSDKVersion = appInsights.defaultClient.context.keys.internalSdkVersion;
				envelope.tags[appInsightsSDKVersion] = "ad_" + envelope.tags[appInsightsSDKVersion];
			} catch(e) {}

			return true;
		}

		// Enable Telemetry only when Application Insight's env variables are correctly set by user
		if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY && process.env.ApplicationInsightsAgent_EXTENSION_VERSION) {
			
			if(process.env.ApplicationInsightsAgent_EXTENSION_VERSION !== "disabled"){
				
				appInsights
				.setup()
				.setSendLiveMetrics(true)
				.start();

				appInsights.defaultClient.addTelemetryProcessor(prefixInternalSdkVersion);
			}
		}
	}catch (e) {
			console.log('Application Insights could not be automatically configured for this application'); 
			console.log(e);
	}