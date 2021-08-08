// day time logic
function checkFinance(day, time) {
  // check if day is saturday or sunday
  if (day == "Sun" || day == "Sat") {
    return false;
  } else {
    // check if time is within 0800 hrs to 1800 hrs
    if (time < 8 || time >= 18) {
      return false;
    }
  }
  return true;
}

function checkTechnology(day, time) {
  // check if day is Mon, Wed, Fri, Sun
  if (day == "Mon" || day == "Wed" || day == "Fri" || day == "Sun") {
    return false;
  } else {
    // check if time is within 0800 hrs to 1800 hrs
    if (time < 8 || time >= 18) {
      return false;
    }
  }
  return true;
}

function checkMarketing(day, time) {
  // check if day is sat or sun
  if (day == "Sat" || day == "Sun") {
    return false;
    // check if time is within 1200 hrs to 1800 hrs
  } else {
    if (time < 12 || time >= 18) {
      return false;
    }
  }
  return true;
}

function status(bool, department) {
  switch (department) {
    case "Finance":
      if (bool) {
        document.getElementById("availableFinance").innerHTML =
          '<img src="img/check.svg" alt="Is available" height="32"/>';
      } else {
        document.getElementById("availableFinance").innerHTML =
          '<img src="img/x.svg" alt="Not available" height="32"/>';
      }
    case "Technology":
      if (bool) {
        document.getElementById("availableTechnology").innerHTML =
          '<img src="img/check.svg" alt="Is available" height="32"/>';
      } else {
        document.getElementById("availableTechnology").innerHTML =
          '<img src="img/x.svg" alt="Not available" height="32"/>';
      }
    case "Marketing":
      if (bool) {
        document.getElementById("availableMarketing").innerHTML =
          '<img src="img/check.svg" alt="Is available" height="32"/>';
      } else {
        document.getElementById("availableMarketing").innerHTML =
          '<img src="img/x.svg" alt="Not available" height="32"/>';
      }
  }
}

var date = new Date().toString();
date = date.split(" ");
day = date[0];
time = date[4].split(":");
time = time[0];
availableFinance = checkFinance(day, time);
availableTechnology = checkTechnology(day, time);
availableMarketing = checkMarketing(day, time);

status(availableFinance, "Finance");
status(availableTechnology, "Technology");
status(availableMarketing, "Marketing");
// to verify
console.log(date);
console.log(day);
console.log(time);

console.log(availableFinance);
console.log(availableTechnology);
console.log(availableMarketing);

// to check if user is logged in
const form = document.getElementById("contactForm");
document.getElementById("contactSubmit").addEventListener("click", () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      form.submit();
    } else {
      alert("Please log in before sending an email.");
      window.location.replace("/login.html");
    }
  });
});
