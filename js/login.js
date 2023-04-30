// Getting Elements
const beforeLogin = document.getElementById("before-login");
const afterLogin = document.getElementById("after-login");

const loginContainer = document.getElementById("login-container");
const loginInput = document.getElementById("loginInput");
const loginButton = document.getElementById("loginButton");

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// Variables
let savedUsername = localStorage.getItem("USERNAME");

// 로그인이 안 된 경우
if (savedUsername === null) {
  loginContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = loginInput.value;

    localStorage.setItem("USERNAME", userName);

    beforeLogin.classList.add("hidden");
    loginContainer.classList.add("hidden");
    afterLogin.classList.remove("hidden");

    afterLogin.innerText = `Welcome, ${userName} 😀`;
  });
}

// 로그인이 된 경우
else {
  // 없애야 할 Elements
  beforeLogin.classList.add("hidden");
  loginContainer.classList.add("hidden");

  // 나타나게 해야 할 Elements
  afterLogin.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");

  afterLogin.innerText = `Welcome, ${savedUsername} 😀`;
}

// console.log(savedUsername);
