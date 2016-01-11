var wordSelections;

function downloadSelections() {
  $(this).attr('href', $(this).attr('href') + wordSelections.join(','));
}

function displaySelections(selections) {
  var appendLi = (text) => $('<li>').text(text).appendTo('#savedTexts');
  selections.forEach(appendLi);
  wordSelections = selections.map(s => s.replace(/,/g, '...'));
}

$('#downloadSelections').click(downloadSelections);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, 'selections', displaySelections);
});
