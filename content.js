


// function playLofi() {
//   console.log("Que Audio...")
//   var myAudio = new Audio(chrome.runtime.getURL("resources/music.mp3"));
//   myAudio.play();
// }


// alternative: add audio player
// function playLofi() {
//   console.log("Que audio...")
//   const body = document.querySelector('body');
//   const audioFig = document.createElement("figure");
//   const myAudio = document.createElement("audio");
//   const audioFile = chrome.runtime.getURL("resources/music.mp3")
//   myAudio.setAttribute("controls","true");
//   myAudio.src = audioFile;
//   audioFig.appendChild(myAudio);
//   body.appendChild(audioFig);
// }

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       console.log('playing')
//       playLofi();
//     }
//   }
// );

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       console.log('playing')
//       playLofi();
//     }
//   }
// );