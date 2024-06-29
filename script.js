let nav = document.querySelector('ul');
let ham = document.getElementById('ham');
let cross = document.getElementById('cross');

ham.addEventListener("click", function() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    ham.style.display = "none";
    cross.style.display = "block";
  } else {
    nav.style.display = "none";
    ham.style.display = "block";
    cross.style.display = "none";
  }
});



// Add event listener for "cross" click outside the main function
cross.addEventListener("click", function() {
  if (cross.style.display === "block") {
    nav.style.display = "none";
    ham.style.display = "block";
    cross.style.display = "none";
  }
});

var typed = new Typed(".auto-type", {
  strings : ["Developer", "Designer",],
  typeSpeed : 250,
  backSpeed : 150,
  looped : true,
});

function sendmail(){
  console.log("hello")
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}

function sendmail() {
let parms = {
  name : document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
}
  emailjs.send("service_w1d3c1r","template_ktjqywl",parms).then(alert("emailsent"));
}