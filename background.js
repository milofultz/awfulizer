browser.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it

	browser.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});

});