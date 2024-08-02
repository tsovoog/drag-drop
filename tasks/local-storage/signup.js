const create = document.getElementById("createButton");
const username = document.getElementById("username");
const newPassword = document.getElementById("password");
const password = document.getElementById("password2");
const loginButton = document.getElementById("login");
create.addEventListener("click", () => {
  if (!username.value || !newPassword.value || !password.value) {
    alert("fill the inputs");
    return;
  }
  if (newPassword.value != password.value) {
    alert("New password does not match");
    return;
  }

  const existingUser = window.localStorage.getItem(username.value);
  if (existingUser) {
    alert("User exists");
    return;
  }

  window.localStorage.setItem(username.value, newPassword.value);
  window.location.href = "./fb.html";
});
