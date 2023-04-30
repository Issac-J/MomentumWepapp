// Getting Elements
const beforeLogin = document.getElementById("before-login");
const afterLogin = document.getElementById("after-login");

const loginContainer = document.getElementById("loginContainer");
const loginInput = document.getElementById("loginInput");
const loginButton = document.getElementById("loginButton");

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
  beforeLogin.classList.add("hidden");
  afterLogin.classList.remove("hidden");
  loginContainer.classList.add("hidden");

  afterLogin.innerText = `Welcome, ${savedUsername} 😀`;
}

// console.log(savedUsername);
