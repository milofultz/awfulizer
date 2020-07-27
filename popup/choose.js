/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {

    function onceAwful(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "onceAwful"
      });
    }

    function cycleAwful(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "cycleAwful"
      });
    }

    /**
     * Get the active tab,
     * then call "onceAwful()" or "cycleAwful()" as appropriate.
     */
    if (e.target.classList.contains("once")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(onceAwful)
    }
    else if (e.target.classList.contains("cycle")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(cycleAwful)
    }
    
  });
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/awfulizer.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);