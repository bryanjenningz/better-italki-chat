// This makes italki's chat automatically update by getting new messages 
// from the server via an AJAX request without having to reload the page.
// 1) Retrieve messages from a GET request to the current URL
// 2) Parse and collect the messages in the HTML response
// 3) Put parsed HTML messages into the HTML messages container
// 4) Poll the server for updates to automatically update the chat

var getMessages = function() {
  var messagesEndIndex = function(messagesHtml) {
    var endPattern = '<div class="clear"></div>\n</li>';
    return messagesHtml.lastIndexOf(endPattern) + endPattern.length;
  };

  var messagesStartIndex = function(messagesHtml) {
    var startPattern = '<ul class="message" id="ul_messages">';
    return messagesHtml.indexOf(startPattern) + startPattern.length;
  };

  var updateChat = function(messagesHtml) {
    var start = messagesStartIndex(messagesHtml);
    var end = messagesEndIndex(messagesHtml);
    var chatContainer = $('#ul_messages');
    var parsedMessages = messagesHtml.slice(start, end);
    chatContainer.html(parsedMessages);
  };

  $.ajax({
    method: 'GET',
    url: window.location.pathname,
    success: updateChat,
    error: console.log.bind(console)
  }); 
};

var stopId = setInterval(getMessages, 1000);
