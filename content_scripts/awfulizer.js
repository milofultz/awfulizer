(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  // if (window.hasRun) {
  //   return;
  // }
  // window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  // function insertBeast(beastURL) {
  //   removeExistingBeasts();
  //   let beastImage = document.createElement("img");
  //   beastImage.setAttribute("src", beastURL);
  //   beastImage.style.height = "100vh";
  //   beastImage.className = "beastify-image";
  //   document.body.appendChild(beastImage);
  // }

  /**
   * Remove every beast from the page.
   */
  // function removeExistingBeasts() {
  //   let existingBeasts = document.querySelectorAll(".beastify-image");
  //   for (let beast of existingBeasts) {
  //     beast.remove();
  //   }
  // }

  function getRandomHex(max) {
    var intNumber = Math.floor(Math.random() * Math.floor(max));
    return '#' + intNumber.toString(16);
  }

  function changeAllColorsCycle() {
    changeAllColors()
    
    setTimeout(changeAllColorsCycle, 150)
  }

  function changeAllColors() {

    var tags = document.getElementsByTagName("*");

    for (var i=0, max=tags.length; i < max; i++) {
      tags[i].style.backgroundColor = getRandomHex(4096);
      tags[i].style.color = getRandomHex(4096);
    }
  }

  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "onceAwful") {
      changeAllColors();
    } else if (message.command === "cycleAwful") {
      changeAllColorsCycle();
    }
  });

})();