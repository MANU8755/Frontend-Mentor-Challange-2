// Get the email from the URL query parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email');

// Update the span content with the retrieved email
const spanEmail = document.getElementById('sp-1');
if (spanEmail && email) {
  spanEmail.textContent = email;
}
// Using [0] to select the first element with class "btn-1"
setTimeout(()=>{
document.getElementsByClassName("btn-1")[0].addEventListener('click', redirect);

function redirect() {
window.location.href = "index.html";
}
},2000);
