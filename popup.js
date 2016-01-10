function displaySelections(selections) {
  var appendLi = (text) => $('<li>').text(text).appendTo('#savedTexts');
  selections.forEach(appendLi);
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, 'selections', displaySelections);
});
