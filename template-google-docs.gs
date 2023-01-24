function onOpen() {
  var doc = DocumentApp.getActiveDocument();
  var docName = doc.getName();
  var parentFolder = DriveApp.getFileById(doc.getId()).getParents().next();
  var copyFolder = parentFolder.getFoldersByName("copies").next();
  if(!copyFolder){
    copyFolder = parentFolder.createFolder("copies");
  }
  var copy = DriveApp.getFileById(doc.getId()).makeCopy(docName + " copy", copyFolder);
  var copyId = copy.getId();
  var copyUrl = copy.getUrl();
  var copyDoc = DocumentApp.openById(copyId);
  var copyDocId = copyDoc.getId();
  var copyDocUrl = copyDoc.getUrl();
  var copyDocLink = copyDocUrl;
  var template = HtmlService.createTemplateFromFile("OpenCopy");
  template.copyDocLink = copyDocLink;
  var html = template.evaluate().setWidth(200).setHeight(50);
  var ui = DocumentApp.getUi();
  var dialog = ui.showModelessDialog(html, "Open copy");
  var link = html.getContent().match(/https?:\/\/[^\s]+/)[0];
  var url = link;
  var link = url.replace(/'$/, '');
  var htmlOutput = HtmlService.createHtmlOutput('<p>DONT make any CHANGES to this template</p><p> Please close this tab after the copy has been created</p><a href="'+link+'" target="_blank"> Automatically create a copy using this link</a>');
  DocumentApp.getUi().showModelessDialog(htmlOutput, ' ');
}
