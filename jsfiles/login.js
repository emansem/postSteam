import { users, loggeUser,  } from "../jsfiles/app.js";

const loginBtn = document.getElementById("loginBtn");
let logedUser = loggeUser

function loginForm(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const userName = document.getElementById("username").value.toLowerCase();
  logedUser = users.find(
    (user) => user.userName === userName && user.password === password
  );
  
    
  if (logedUser) {
    setTimeout(function () {
      
      window.location.href = "dashboard.html";
    }, 2000);
    loginBtn.innerHTML = "Please wait..";
    
  } else {
    alert("No user found try again");
   
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", loginForm);
} else {
  console.error("Login button not found.");
}
