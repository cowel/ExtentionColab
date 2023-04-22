console.log("matches.js");


Xpath = '/html/body/div[7]/div[2]/div[1]/colab-tab-layout-container/div/div/colab-tab-pane/div/div[2]/colab-tab/div/colab-shaded-scroller/div[1]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/colab-form/div/colab-form-input[1]/div[2]/paper-input'
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.method) {
        case "message":
            sendResponse({ title: document.title });
            break;
        case "run":
            var connectBtn = document
                ?.querySelector('#top-toolbar > colab-connect-button')
                ?.shadowRoot
                ?.querySelector('#connect')
          
            console.log("connectBtn: " + JSON.stringify(connectBtn))
            if (objNotFound(connectBtn)) {
                return;
            }
            connectBtn.click();
            sleep(500);
            var closeBtn = document?.querySelector('paper-icon-button[title=Close]');
            if (objNotFound(closeBtn)) {
                return;
            }
            closeBtn.click();

            function getElementByXpath(path) {
                return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            }
            console.log("value: " + JSON.stringify(getElementByXpath(window.Xpath)))
            getElementByXpath(window.Xpath).value = message.page
            console.log("method: " + message.page);
            sendResponse("run: " + document.title);
            break;

    }
    return true;
});