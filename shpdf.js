function waitForElementToDisplay(selector, time) {
  if (document.querySelector(selector) != null) {
    window.location = document.evaluate("string(//iframe[@id='pdf']/@src)", document, null, XPathResult.stringValue, null).stringValue;
  } else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time);
    }, time);
  }
}

waitForElementToDisplay("iframe#pdf", 10)