function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index");
}

function getUserName() {
  var email = Session.getActiveUser().getEmail();
  if (!email) return "";
  return email.split("@")[0];
}
