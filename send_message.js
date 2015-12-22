// Allows users to automatically send a chat messages when they hit 
// ENTER in the chat text field.
var keys = {'13': 'enter'};
$('#txt_send_content').on('keydown', function(e) {
  if (keys[e.keyCode] === 'enter') {
    $('#btn_box_ok').click();
  }
});
