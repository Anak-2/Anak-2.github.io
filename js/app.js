const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const login = document.querySelector("#login");

const USER_NAME = "username";

function onLoginSubmit(event) {
  //stop browser's default reaction
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);
  loginForm.classList.add("hidden");
  login.classList.remove("hidden");
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add("hidden");
  login.classList.remove("hidden");
  greeting.innerText = `Hello ${savedUsername}`;
}
