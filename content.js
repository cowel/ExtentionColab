console.log("matches.js");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Recv. Send response = " + document.title);
    sendResponse({ title: document.title });

    return true;
});