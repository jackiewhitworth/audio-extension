// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    playLofi();
  });
});



function playLofi() {
  console.log("Que Audio...")
  var myAudio = new Audio(chrome.runtime.getURL("resources/music.mp3"));
  myAudio.play();
}