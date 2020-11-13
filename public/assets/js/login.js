$(document).ready(() => {
  const loginForm = $("#loginForm");
  const userEmail = $("#userName");
  const password = $("#userPass");

  loginForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      email: userEmail.val(),
      password: password.val(),
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    userEmail.val("");
    password.val("");
  });

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password,
    })
     .then(() => {
        window.location.replace("/");
      })
     .catch((error) => {
        console.log(error);
    });
  }
});
