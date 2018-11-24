function openSettings() {
    document.getElementById("settings").classList.toggle("settings-open");
    document.getElementById(settings-button).addEventListener('click', openSettings);
}

var userName = localStorage.getItem('receivedName');

function saveName() {
    console.log("savename!!");

    localStorage.setItem('receivedName', userName);
    console.log("okay");

    userName = localStorage.getItem('receivedName');
    console.log("completed: username == " + userName);
    window.location.reload();
    console.log('come to here?');
}

function changeName() {
   userName = document.getElementById("name-input").value;
   console.log("username: " + userName);

   saveName();
}

function getGreeting() {
    console.log("getGreeting!");
    document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Have a great day!`;
   }


getGreeting()
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault()
    console.log("clicked!");

    changeName();
 });

 