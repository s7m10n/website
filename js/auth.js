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
  location.reload();
}

auth.onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    console.log("Active user", email);
    document.getElementById("navbar-nav").innerHTML +=
      '<a id="logoutLink" onclick="logout()" class="nav-link">log out</a>';

    const docRef = db.collection("user-data").doc(user.uid);
    docRef.get().then((doc) => {
      const data = doc.data();
      const username = data["username"];
      document.getElementById("navbar-nav").innerHTML +=
        '<span class="white text-decoration-underline align-self-center">username: ' +
        username +
        "<span>";
    });
  } else {
    console.log("No user detected.");
  }
});
