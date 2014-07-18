// This is the JS that gets appended to the document.
function getSelText() {
  var txt = '';
  if (window.getSelection) {
    txt = window.getSelection();
  } else if (document.getSelection) {
    txt = document.getSelection();
  } else if (document.selection) {
    txt = document.selection.createRange().text;
  } else return;
  return txt;
}

function getLeadInfo(email) {
  var body = getSelText();
  var namespace = ""; // Randomly generated.

  // Parse email.
  // TODO.

  if ( body == '' ) {
    alert("Nothing selected. Please select an email address first.");
  } else {
    // Create object.
    var http = new XMLHttpRequest();

    // Open a new tab/window. Send stacklead data to this namespace.
    window.open('http://leadlet.herokuapp.com/' + namespace);

    // POST
    var data = "email=" + body + "&namespace=" + namespace;
    var url = "http://leadlet.herokuapp.com/api/email";
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(data);
  }
}