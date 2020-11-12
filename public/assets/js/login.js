$(document).ready(() => {
    const loginForm = $("#loginForm");
    const userEmail = $("#userName");
    const password = $("password");

    loginForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            email: userEmail.val().trim(),
            password: password.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        loginUser(userData.email, userData.password);
        userEmail.val("");
        password.val("");

    })

    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
         .then(() => {
             window.location.replace("/");
         })
         .catch(error => {
             console.log(error);
         })
    }

})