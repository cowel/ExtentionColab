// document.getElementById("id_Recv").onclick = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       func: RecvFromDomainA
//     });
//   });
// }


document.getElementById("id_run").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: SendToDomainB
    });
  });
}

// function RecvFromDomainA() {
//   let value = document.getElementById("Icname").value;
//   cachesonsole.log("value: "+ value);
//   chrome.runtime.sendMessage({ method: "send", key: "key", value: value }, () => {
//   });
// }

function SendToDomainB() {
  chrome.runtime.sendMessage({ method: "recv", key: "key" }, (response) => {
    let x = document.getElementsByTagName("input")[2].value;
    console.log("value1: " + x);
  });
}
// /html/body/div[7]/div[2]/div[1]/colab-tab-layout-container/div/div/colab-tab-pane/div/div[2]/colab-tab/div/colab-shaded-scroller/div[1]/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/colab-form/div/colab-form-input[1]/div[2]/paper-input//paper-input-container/iron-input