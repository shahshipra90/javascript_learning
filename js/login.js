$(document).ready(function(){
$("#form1").validate({
  rules: {
    fname: {
      required: true
    },
    mail: {
    required:  true,
    email: true,
    matches: '.+@gmail.com'
  },
    password: {
      required: true,
      minlength: 8
    }
  },
messages: {
  fname: {
    required: "Please enter"
  },
  mail: {
    required: "Please enter",
    matches: "Valid email enter"
  },
  password: {
    required: "Please enter password",
    minlength: "enter 8 char atleast"
 }
}
});
});

function getData()
{
   var name = document.getElementById("fname").value;
   var mail= document.getElementById("mail").value;
   var pass= document.getElementById("password").value;

   localStorage.setItem("f_name", name);
   localStorage.setItem("email_id", mail);
   localStorage.setItem("password_1", pass);
}
