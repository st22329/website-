const handleLogin = (e) => {
  let userData = {
    username: document.getElementById("Main__Login__Form__Input__Username")
      .value,
    password: document.getElementById("Main__Login__Form__Input__Password")
      .value,
  };

  if (userData.username !== "e" && userData.password !== "e") {
    return alert("log in credentionals not valid.");
  }

  sessionStorage.setItem("token", "IAMAVERYSECURETOKEN");
  window.location.pathname = "/pages/booking.html";
};

document
  .getElementById("Main__Login__Form")
  .addEventListener("submit", handleLogin);
