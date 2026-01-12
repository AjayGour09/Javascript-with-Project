function loadNavbar() {
  fetch("../navbar.html") // load navbar file
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      
    });
}


 
