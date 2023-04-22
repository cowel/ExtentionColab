var page = document.getElementById("id_Ipname").value
var chapter = document.getElementById("id_Icname").value

Xpath = '/html/body/div[7]/div[2]/div[1]/colab-tab-layout-container/div/div/colab-tab-pane/div/div[2]/colab-tab/div/colab-shaded-scroller/div[1]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/colab-form/div/colab-form-input[1]/div[2]/paper-input'
document.getElementById("id_run").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: SendToDomainB
    });
    console.log("Send message run");
    chrome.tabs.sendMessage(tabs[0].id, {method: "run", page: window.page, chapter: window.chapter}, (response) => {
      console.log(response);
    });
  });
}

function SendToDomainB() {
  chrome.runtime.sendMessage({ method: "recv", key: "key" }, (response) => {
    function getElementByXpath(path) {
      return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    console.log("value: " + getElementByXpath(window.Xpath).value)
    getElementByXpath(window.Xpath).value = '5'
  });
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Send");
  chrome.tabs.sendMessage(tabs[0].id,  {method: "message"}, (response) => {
    console.log("Recv response = " + response.title);
  });
});
