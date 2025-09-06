chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("youtube.com")) {
    console.log("YouTube loaded sending notification");

    chrome.notifications.create({
      type: "basic",
      iconUrl: "skeptical.png",
      title: "...",
      message: " "
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Notification error:", chrome.runtime.lastError.message);
      } else {
        console.log("notification wrok");
      }
    });
  }
});
