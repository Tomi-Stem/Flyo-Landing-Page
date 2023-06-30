  const emailFields = document.querySelectorAll('.email-field');
  const emailErrors = document.querySelectorAll('.email-error');


emailFields.forEach((field, i) => {
  field.addEventListener('keyup', () => {
    if(!field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        field.style.borderColor = "hsl(0, 94%, 66%)";
        field.style.marginBottom = "30px";
        emailErrors[i].style.visibility = "visible";
        emailErrors[i].innerHTML = "Please check your email";
        
      } else {
        field.style.borderColor = "hsl(224, 93%, 58%)";
        field.style.marginBottom = "15px"
        emailErrors[i].innerHTML = "";
        emailErrors[i].style.visibility = "hidden";
      }
  })
})