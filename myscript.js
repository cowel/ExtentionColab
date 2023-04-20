const page = document.getElementById("id_Ipname")
const chapter = document.getElementById("id_Icname")

document.getElementById("id_run").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: SendToDomainB
    });
  });
}

function SendToDomainB() {
  chrome.runtime.sendMessage({ method: "recv", key: "key" }, (response) => {
    let x = document.title;
    console.log("value1: " + x);
  });
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Send");
  chrome.tabs.sendMessage(tabs[0].id, "message", (response) => {
    console.log("Recv response = " + response.title);
    document.getElementById("title").innerText = response.title;
  });
});
// /html/body/div[7]/div[2]/div[1]/colab-tab-layout-container/div/div/colab-tab-pane/div/div[2]/colab-tab/div/colab-shaded-scroller/div[1]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/colab-form/div/colab-form-input[1]/div[2]/paper-input//paper-input-container/iron-input