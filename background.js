chrome.runtime.onMessage.addListener(function(message) {
  if (message.type === 'show_vocab_list') {
    chrome.tabs.create({
      url: chrome.extension.getURL('vocab_list.html'),
      active: false
    }, function(tab) {
      chrome.windows.create({
        tabId: tab.id,
        type: 'popup',
        focused: true
      });
    });
  }
});
