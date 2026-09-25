          function updateTime() {
    var TimeToGetaWatch = new Date().toLocaleString();
    var timeText = document.querySelector("#TimeForTime");
    timeText.innerHTML = TimeToGetaWatch
          }
          setInterval(updateTime, 1000);
dragElement(document.getElementById("welcome"));
function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }
  function startDragging(e) {
    e = e || window.event;
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }
  function dragElement(e) {
    e = e || window.event;
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});
var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("Selected");
  selectedIcon = element
} 
function deselectIcon(element) {
  element.classList.remove("Selected");
  selectedIcon = undefined
}
function handleIconTap(element) {
  if (element.classList.contains("Selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}
dragElement(document.getElementById("EpicEpics"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }
  function startDragging(e) {
    e = e || window.event;
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var EpicEpics = document.querySelector("#EpicEpics")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var EpicClose = document.querySelector("#EpicClose")

var EpicEpicsOpen = document.querySelector("#EpicEpicsOpen")
EpicClose.addEventListener("click", function() {
  closeWindow(EpicEpics);
});

EpicEpicsOpen.addEventListener("click", function() {
  openWindow(EpicEpics);
});
// Make the DIV element draggable:
dragElement(document.getElementById("WeatherApp"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;

    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var WeatherApp = document.querySelector("#WeatherApp")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var WeatherClose = document.querySelector("#WeatherClose")

var WeatherIcon = document.querySelector("#WeatherIcon")
WeatherClose.addEventListener("click", function() {
  closeWindow(WeatherApp);
});

WeatherIcon.addEventListener("click", function() {
  openWindow(WeatherApp);
});
