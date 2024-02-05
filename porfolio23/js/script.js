// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-moon")) {
    darkmode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
};

//email send function
function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    massage: document.getElementById("message").value,
  };
  const serviceID = "service_fpbl66l";
  const templateID = "template_089m50t";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
