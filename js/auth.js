const page = window.location.pathname.split("/").pop();
console.log(page);

// register
if (page == "register.html") {
  const registerForm = document.querySelector("#registerForm");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return db
        .collection("user-data")
        .doc(cred.user.uid)
        .set({
          username: document.getElementById("registerUsername").value,
          email: email,
          cname: document.getElementById("registerCompanyName").value,
          clevel: document.getElementById("registerCompanyLevel").value,
          csize: document.getElementById("registerCompanySize").value,
          bsector: document.getElementById("registerBusinessSector").value,
          country: document.getElementById("registerCountry").value,
        });
    });
  });
}

// login
else if (page == "login.html") {
  const loginForm = document.querySelector("#loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred.user);
    });
  });
}

// logout
function logout() {
  auth.signOut();
  alert("Logged out successfully.");
}

auth.onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    console.log("Active user", email);
  } else {
    console.log("No user detected.");
  }
});
