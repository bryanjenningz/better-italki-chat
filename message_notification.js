// When the user receives a new message, visibly give them a notification by having
// the content in the tab's title alternate "message received" and the original title 
// text to get the user's attention in the same way Facebook's chat does.
(function() {
  var title = $('title');
  var messageNotification = $('#font_head1');
  var originalTitleText = title.text();
  var isOriginalTitle = true;
  var notificationId = null;
  
  var alternateTitle = function() {
    // Checking if notificationId is null is done to avoid having multiple
    // intervals before the user clears their message notifications. 
    // Having a null notificationId indicates there are currently no intervals.
    if (notificationId === null && messageNotification.text()) {
      notificationId = setInterval(function() {
        title.text(isOriginalTitle ? 'message received' : originalTitleText);
        isOriginalTitle = !isOriginalTitle;
      }, 1000);
    }
  };
  
  var stopAlternatingTitle = function() {
    if (notificationId !== null) {
      title.html(originalTitleText);
      isOriginalTitle = true;
      clearInterval(notificationId);
      notificationId = null;
    }
  };
  
  var observer = new MutationObserver(alternateTitle);
  observer.observe(document.querySelector('#font_head1'), {childList: true});
  $('#txt_send_content').focus(stopAlternatingTitle);
})();
