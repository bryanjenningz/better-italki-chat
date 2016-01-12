$('body').keyup(function(event) {
  var V_KEY_CODE = 86;
  if (event.keyCode === V_KEY_CODE && !!getSelection().toString()) {
    chrome.runtime.sendMessage({type: 'show_vocab_list'});
  }
});
