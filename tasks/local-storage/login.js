const username = document.getElementById("usernameInput");
const password = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const create = document.getElementById("createButton");
const forgotPassword = document.getElementById("forgot");
loginButton.addEventListener("click", () => {
  if (!username.value || !password.value) {
    alert("fill the inputs");
    return;
  }
  const passwordLocal = window.localStorage.getItem(username.value);
  if (password.value == passwordLocal) {
    alert("Successfully logged in");
    window.location.href = "https://www.facebook.com/";
  } else {
    alert("password or username wrong");
  }
});
create.addEventListener("click", () => {
  window.location.href = "./signup.html";
});
