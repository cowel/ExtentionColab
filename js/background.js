let value;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.method) {
    case "send":
      console.log("method: " + message.method);
      value = message.value;
      break;
    case "recv":
      sendResponse({ value: value });
      break;

  }

  return true;
});