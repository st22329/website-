const isUserLoggedIn = () => {
  if (sessionStorage.getItem("token") === null) {
    window.location.pathname = "/pages/login.html";
  }
};

isUserLoggedIn();
