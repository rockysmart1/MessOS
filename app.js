
function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

// function initWindow(elementName){
//   var screen = document.querySelector("#"+elementName)
//   document.getElementById(elementName+"close").addEventListener("click", function(){
//   closeWindow(screen);
// });

// }
// initWindow(photo)

// function test(elem){
//   thing = document.getElementById(elem);
//   thing.addEventListener("click", function(){
//     thing.innerText = "works";
//   });
// }

// test(hello);
var welcomeScreen = document.querySelector("#welcome")

var welcomeScreenOpen = document.querySelector("#welcomeopen");
var welcomeScreenClose = document.querySelector("#welcomeclose");


welcomeScreenOpen.addEventListener("dblclick", function(){
  openWindow(welcomeScreen);
});

welcomeScreenClose.addEventListener("click", function(){
  closeWindow(welcomeScreen);
});


