document.getElementById("settings-button").addEventListener('click', openSettings);

function openSettings() { 
    // console.log("open settings")
    document.getElementById("settings").classList.toggle("settings-open");
    // console.log("settings")
}

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

 document.getElementById("settings-button").onload = function() {startTime()}

 function startTime() {
     console.log('time start')
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}