function showTime() {
  var present = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("time").innerHTML =
    present.getHours() +
    ":" +
    addLeadingZero(present.getMinutes()) +
    ":" +
    addLeadingZero(present.getSeconds());
  document.getElementById("date").innerHTML =
    present.getDate() + " " + months[present.getMonth()] + " " + "2032";
}

function addLeadingZero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

setInterval(showTime, 1000);

document.getElementById("marsMode").onclick = function () {
  document.body.className = "theme-martian";

  document.getElementById("marsMode").className = "activeButton";
  document.getElementById("lightMode").className = "switchButton";
  document.getElementById("darkMode").className = "switchButton";
};

document.getElementById("lightMode").onclick = function () {
  document.body.className = "theme-light";

  document.getElementById("lightMode").className = "activeButton";
  document.getElementById("marsMode").className = "switchButton";
  document.getElementById("darkMode").className = "switchButton";
};

document.getElementById("darkMode").onclick = function () {
  document.body.className = "theme-dark";

  document.getElementById("darkMode").className = "activeButton";
  document.getElementById("lightMode").className = "switchButton";
  document.getElementById("marsMode").className = "switchButton";
};
