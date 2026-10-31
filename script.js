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

const apiKey = '809c2db901f50e749753e89d976f0f34';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('city-input');
const searchButton = document.getElementById('city-input-btn');
const locationElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperatureData');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});


function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

dragElement(document.getElementById("NotesApp"));

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
var NotesApp = document.querySelector("#NotesApp")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var NotesClose = document.querySelector("#NotesClose")

var NotesAppIcon = document.querySelector("#NotesAppIcon")
NotesClose.addEventListener("click", function() {
  closeWindow(NotesApp);
});

NotesAppIcon.addEventListener("click", function() {
  openWindow(NotesApp);
});

const noteForm = document.getElementById('NoteForm');
const noteInput = document.getElementById('NoteInput');
const notesList = document.getElementById('NotesList');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const div = document.createElement('div');
    div.className = 'note';
    div.textContent = note;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.onclick = () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    };

    div.appendChild(delBtn);
    notesList.appendChild(div);
  });
}

noteForm.addEventListener('submit', e => {
  e.preventDefault();
  const note = noteInput.value.trim();
  if (!note) return;
  notes.push(note);
  noteInput.value = '';
  saveNotes();
  renderNotes();
});

renderNotes();

dragElement(document.getElementById("GalleryApp"));

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
var GalleryApp = document.querySelector("#GalleryApp")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "block"
}
var GalleryClose = document.querySelector("#GalleryClose")

var GalleryIcon = document.querySelector("#GalleryIcon")
GalleryClose.addEventListener("click", function() {
  closeWindow(GalleryApp);
});

GalleryIcon.addEventListener("click", function() {
  openWindow(GalleryApp);
});