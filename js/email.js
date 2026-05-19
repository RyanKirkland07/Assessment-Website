let submit = document.querySelector("#submit");

submit.addEventListener('click', processForm);

function processForm(event){
    let form = event.target.form;

    let p = document.querySelector("#paragraph");
    let radio = document.querySelector('input[name="age-range"]:checked').value;
    let checkbox = document.querySelectorAll('input[name="sector"]:checked');
    p.textContent += form.elements['fname'].value + " " + form.elements['lname'].value + " " + form.elements['email'].value + " " + radio + " ";
    for(let i = 0; i < checkbox.length; i++){
        p.textContent += checkbox[i].value + " ";
    }
}