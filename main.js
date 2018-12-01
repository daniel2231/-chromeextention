document.getElementById("settings-button").addEventListener('click', openSettings);

function openSettings() { 
    // console.log("open settings")
    document.getElementById("settings").classList.toggle("settings-open");
    // console.log("settings")
}

//Getting Name
var userName = localStorage.getItem('receivedName');

function saveName() {
    // console.log("savename!!");

    localStorage.setItem('receivedName', userName);
    // console.log("okay");

    userName = localStorage.getItem('receivedName');
    // console.log("completed: username == " + userName);
    window.location.reload();
    // console.log('come to here?');
}

function changeName() {
   userName = document.getElementById("name-input").value;
    //console.log("username: " + userName);

   saveName();
}

function getGreeting() {
    // console.log("getGreeting!");
    if (userName == null) {
        userName = "friend";
     }
    document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Have a great day!`;
   }


getGreeting()
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault()
    // console.log("clicked!");

    changeName();
 });

 //Clock
 window.onload = startTime()

 function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

//TodoList
function newList() {
    var item = document.getElementById("goal").value;
    var ol = document.getElementById("toDoList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ol.appendChild(li);
    document.getElementById("goal").value = "";
    li.onclick = removeItem;
  }
  
  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      newList();
    }
  };
  
  function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }