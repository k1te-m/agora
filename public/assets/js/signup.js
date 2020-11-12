$(document).ready(() => {
  // Form & Input References
  const signUpForm = $("#signup");
  const userName = $("#userName");
  const emailInput = $("#email");
  const passwordInput = $("#password");

  signUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      name: userName.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };
    console.log(userData);

    signUp(userData.name, userData.email, userData.password);
    userName.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function signUp(userName, email, password) {
    let obj = {
      name: userName,
      email: email,
      password: password,
    };
    console.log(obj);
    $.post("/api/signup", obj).then(() => {
      window.location.replace("/");
    });
  }
});
