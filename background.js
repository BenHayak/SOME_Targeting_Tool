function onMenuClick(info, tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["SOMEReference.js"]
  });
}

var title = "Target this Element (SOME)";
chrome.contextMenus.create({
  id: "someReference",
  title: title,
  contexts: ["all"]
}, () => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    console.log("Context menu item created with id: someReference");
  }
});

// Listener for context menu item clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "someReference") {
    onMenuClick(info, tab);
  }
});
