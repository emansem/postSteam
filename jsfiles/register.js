// Variables declaration

import { users , saveUsersData } from "../jsfiles/app.js";
const registerBtn = document.getElementById("registerBtn");

// Create Account Function
function createAccount(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const emailInput = document.getElementById("email").value;
  // const phone = document.getElementById('phone').value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const userName = document.getElementById("username").value.toLowerCase();
  const user = users.find(
    (user) => user.email === emailInput || user.userName === userName
  );

  if (user) {
    alert("This user already exists");
  } else {
    if (userName.length > 8) {
      alert("Username must not be more than 5 characters");
    } else if (password.length < 8 || password !== confirmPassword) {
      alert(
        "Password must be at least 8 characters long and must match the confirm password"
      );
    } else {
      users.push({
        userName: userName,
        password: password,
        fullName: fullname,
        email: emailInput,
      });
      saveUsersData();
      console.log(users);
      alert("Account created successfully");

      // Clear form inputs
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirm-password").value = "";
      document.getElementById("username").value = "";

      setTimeout(function () {
        window.location.href = "login.html";
      }, 1500);
    }
  }
}
// Register button event listener
registerBtn.addEventListener("click", createAccount);