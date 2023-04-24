//making mobile menu icon dissapear

function myFunction() {
    myVar = setTimeout(showPage, 4100);
   myvar = setTimeout(load,3000)
  }
  
  function load(){
    document.getElementById("two").style.display = "inherit"
  }

  function showPage() {
    document.getElementById("loder").style.display = "none";
    document.getElementById("none").style.display = "inherit";
  }

  let bar = document.getElementById('bar');
  let x = document.getElementById("x");
  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  let a4 = document.getElementById("a4");
  let a5 = document.getElementById("a5");
;
//sending email from form

    bar.addEventListener(('click'), function(){
      bar.style.display = "none"
      menu.style.right = "0px"
    })
  
    a1.addEventListener(('click'), disaper)
    a2.addEventListener(('click'), disaper)
    a3.addEventListener(('click'), disaper)
    a4.addEventListener(('click'), disaper)
    a5.addEventListener(('click'), disaper)
    x.addEventListener(('click'), disaper)

    function disaper(){
      menu.style.right = "-200px"
      bar.style.display = "block"

    }

    function stop(){
  a1.removeEventListener('click', disaper);
  a2.removeEventListener('click', disaper);
  a3.removeEventListener('click', disaper);
  a4.removeEventListener('click', disaper);
  a5.removeEventListener('click', disaper);
    }
    if(window.innerWidth > 365 ){
    stop()
}
if(window.innerWidth < 1000 ){
  add()
}
function add(){
  a1.addEventListener('click', disaper)
  a2.addEventListener('click', disaper)
  a3.addEventListener('click', disaper)
  a4.addEventListener('click', disaper)
  a5.addEventListener('click', disaper)
}

function sendEmail(){
  let message = document.getElementById("message").value 
  let name = document.getElementById("name").value 
  let email = document.getElementById("email").value 
  let subject = document.getElementById("email-subject").value 
  
  let body = "Name: " + name + "<br/>Email: " + email + "<br/>message: " + message;
  
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "tcatty7@gmail.com",
  Password : "F0EBF5E7816740FE9FAB5CAFC903B8CE4FBD",
  To : 'tcatty7@gmail.com',
  From : "tcatty7@gmail.com",
  Subject : subject,
  Body : body
  }).then(
  message => alert("thank you for sending me an email")
  );
    }
  
  function initEmail(){
    Email.send({
  Host : "smtp.elasticemail.com",
  Username : "tcatty7@gmail.com",
  Password : "F0EBF5E7816740FE9FAB5CAFC903B8CE4FBD",
  To : 'tcatty7@gmail.com',
  From : "tcatty7@gmail.com",
  Subject : "email sent from portfolio website",
  Body : body
  }).then(
  
  );
  }
  function initEmail1(){
    Email.send({
  Host : "smtp.elasticemail.com",
  Username : "tcatty7@gmail.com",
  Password : "F0EBF5E7816740FE9FAB5CAFC903B8CE4FBD",
  To : 'tcatty7@gmail.com',
  From : "tcatty7@gmail.com",
  Subject : "email sent from portfolio website",
  Body : body
  }).then(
  
  );
  }