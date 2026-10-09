onload = closeWindow(notes);

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

welcomeScreenOpen.addEventListener("click", function(){
    
});

// const apps = document.querySelectorAll(".app");

// apps.forEach(function(item){
//     item.addEventListener("click", ()=>{
//         item.classList.toggle("active-state");
//         item.focus();
//     })
// });


welcomeScreenClose.addEventListener("click", function(){
  closeWindow(welcomeScreen);
});

window.addEventListener("load", function(){
    
});


function initializeIcon(name) {
    var icon = document.querySelector("#" + name + "Icon")
    var screen = document.querySelector("#" + name)
    icon.addEventListener("dblclick", () => openWindow(screen));

    var close = document.querySelector("#" + name + "close")
    close.addEventListener("click",()=>closeWindow(screen))
}
initializeIcon("notes")


