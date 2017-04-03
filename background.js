
function onMenuClick(info, tab) {
  chrome.tabs.executeScript(null, {file: "SOMEReference.js"});
}
var title = "Target this Element (SOME)";
var id = chrome.contextMenus.create({"title": title, "contexts":["all"], "onclick": onMenuClick});
console.log("item:" + id);

