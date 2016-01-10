var selections = [];
var sIsDown = false;
var S_KEY_CODE = 83;

function trackSKey(event) {
  if (event.keyCode === S_KEY_CODE) {
    sIsDown = true;
    $(document).keyup(function(event) {
      if (event.keyCode === S_KEY_CODE) {
        sIsDown = false;
        $(document).off('keyup');
      }
    });
  }  
}

function saveText() {
  var selection = getSelection().toString().trim();
  if (selection && sIsDown) {
    selections.push(selection);
    console.log(selections);
  }
}

$(document).keydown(trackSKey);
$('.contentP').delegate('.m_con', 'mouseup', saveText);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'selections') {
    sendResponse(selections);
  }
});
