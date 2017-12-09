chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
      chrome.tabs.create({'url': chrome.extension.getURL('popup2.html?target='+tabs[0].url)}, function(tab) {
    // Tab opened.
      });
  });
  //chrome.tabs.create({'url': chrome.extension.getURL('popup2".html')}, function(tab) {
    // Tab opened.
  //});
});
