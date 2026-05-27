const SUBMIT = document.querySelector("#submit");
const RESET = document.querySelector("#resetBtn");

SUBMIT.addEventListener('click', processForm);
RESET.addEventListener('click', resetForm);

function processForm(event){
    let form = document.querySelector("#email-form");

    let p = document.querySelector("#name");
    p.textContent = `Hello, ${form.elements['fname'].value} ${form.elements['lname'].value}`;

    p = document.querySelector("#email");
    p.textContent = `You signed up for the Game Software newsletter with the email ${form.elements['email'].value}`;

    p = document.querySelector("#age");
    let ageRange = document.querySelector('input[name="age-range"]:checked').value;
    p.textContent = `You said you are in the ${ageRange} age range`;
    
    p = document.querySelector("#sectors");
    let sectorBoxes = document.querySelectorAll('input[name="sector"]:checked');
    let sectorText = `You selected news for the sectors: `;
    for(let sector of sectorBoxes){
        sectorText += sector.value + ', ';
    }
    if(sectorBoxes.length == 0){
        sectorText += 'no sectors selected';
    }
    p.textContent = sectorText.replace(/, $/, "");

    p = document.querySelector("#additional-notes");
    p.textContent = `Additional Notes: ${form.elements['additional-text'].value}`
}

function resetForm(event){
    document.querySelector("#email-form").reset();
}