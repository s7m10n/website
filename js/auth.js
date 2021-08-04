// register
const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", (e) => {
  // prevent page from refreshing upon submitting, as default action is to refresh
  e.preventDefault();

  // get user info
  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  console.log(email, password, username);

  // register user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    registerForm.reset();
  });
});

// logout
