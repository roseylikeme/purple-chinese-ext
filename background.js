let contextMenuItem = {
    "id": "searchPurpleChinese",
    "title": "Search Purple Chinese",
    "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "searchPurpleChinese" && clickData.selectionText) {
        let searchUrl = "https://purpleculture.net/dictionary-details/?word=" + clickData.selectionText;
        
        chrome.tabs.create({ url: searchUrl });
    }
})