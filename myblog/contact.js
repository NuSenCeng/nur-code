var Name = document.getElementById('name').value;
var surName = document.getElementById('surname').value;
var email = document.getElementById('email').value;
var cinsiyet = document.getElementById('cinsiyet').value;
var subject = document.getElementById('subject').value;
var massage = document.getElementById('massage').value;


Email.send({
    Host : "smtp.elasticemail.com",
    Username : "karakasnursena6@gmail.com",
    Password : "24720652316CBA15D3893344CCD114B1429A",
    To : 'rapoldbutgold@gmail.com',
    From : "karakasnursena6@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);