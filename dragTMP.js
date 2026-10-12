function dragElement(element) {
  var offsetX = 0;
  var offsetY = 0;

  var header = element.querySelector(".windowheader");
  
  if (header) {
    header.onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

    element.addEventListener("mousedown", (e) => {
        if (header && header.contains(e.target)) return; 
        bringToFront(element);
    });

    element.addEventListener("mousedown", (e) => {
        bringToFront(element);
    });

    
    function bringToFront(el) {
        element.style.zIndex = Math.floor(Date.now() / 1000);
    }

    function startDragging(e) {
        if (e.target.classList.contains("windowheaderclose") || e.target.id.includes("close")) {
            return;
        }

    e = e || window.event;
    e.preventDefault();


    element.style.position = "absolute";


    element.style.transform = "none"; 
    element.style.margin = "0px";


    var rect = element.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // element.style.zIndex = Math.floor(Date.now() / 1000);

    document.onmouseup = stopDragging;
    document.onmousemove = moveElement;
  }

  function moveElement(e) {
    e = e || window.event;
    e.preventDefault();

    var topBarHeight = 50; 
    
    // Calculate new position based on where the pointer is relative to the screen
    var newLeft = e.clientX - offsetX;
    var newTop = e.clientY - offsetY;

    var boundaryWidth = window.innerWidth;
    var boundaryHeight = window.innerHeight;

    var maxLeft = boundaryWidth - element.clientWidth;
    var maxTop = boundaryHeight - element.clientHeight;

    // Strict boundary clipping to keep it inside the screen
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(topBarHeight, Math.min(newTop, maxTop));

    element.style.left = newLeft + "px";
    element.style.top = newTop + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.querySelectorAll(".window").forEach(windowElement => {
  dragElement(windowElement);
});
document.querySelectorAll(".app").forEach(windowElement => {
  dragElement(windowElement);
});
