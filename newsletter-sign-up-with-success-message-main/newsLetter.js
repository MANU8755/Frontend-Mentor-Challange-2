let btn = document.getElementsByClassName("btn-1")[0];
btn.addEventListener('click', emailValidation);

function emailValidation() {
  let inputEmail = document.getElementsByClassName("input-email")[0];
  let currentEmail = inputEmail.value;

  if (currentEmail.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(currentEmail)) {

      // Redirect after 2 seconds with the email parameter
      setTimeout(function() {
        window.location.href = `suscribe.html?email=${encodeURIComponent(currentEmail)}`;
      },2000);
    } else {
  let error = document.getElementById("invalid-error");
  let email = document.getElementsByClassName("email-add")[0];
  email.style.marginBottom="-12px";
  error.textContent = "Valid email required";
  error.style.marginLeft="18em";
  inputEmail.style.backgroundColor = "hsl(4, 100%, 67%)";
  inputEmail.style.border = "1px solid rgb(224 24 24)";
}


  } else {
    console.log('Email field is empty');
  }
}