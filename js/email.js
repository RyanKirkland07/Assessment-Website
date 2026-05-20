const SUBMIT = document.querySelector("#submit");
const RESET = document.querySelector("#resetBtn");

SUBMIT.addEventListener('click', processForm);
RESET.addEventListener('click', resetForm);

function processForm(event){
    let form = document.querySelector("#email-form");

    let p = document.querySelector("#paragraph");
    let radio = document.querySelector('input[name="age-range"]:checked').value;
    let checkbox = document.querySelectorAll('input[name="sector"]:checked');
    p.textContent += form.elements['fname'].value + " " + form.elements['lname'].value + " " + form.elements['email'].value + " " + radio + " ";
    for(let i = 0; i < checkbox.length; i++){
        p.textContent += checkbox[i].value + " ";
    }
}

function resetForm(event){
    document.querySelector("#email-form").reset();
}