const SUBMIT = document.querySelector("#submit");
const RESET = document.querySelector("#resetBtn");

SUBMIT.addEventListener('click', processForm);
RESET.addEventListener('click', resetForm);

function processForm(event){
    event.preventDefault();

    let form = document.querySelector("#email-form");

    let fname = form.elements["fname"].value;
    let lname = form.elements["lname"].value;
    let email = form.elements["email"].value;
    let ageRange = document.querySelector("input[name='age-range']:checked");
    if(fname == "" || lname == "" || email == "" || ageRange == null){
        alert("Please Provide Input For All Required Fields");
        return false;
    }

    let p = document.querySelector("#name");
    p.textContent = `Hello, ${fname} ${lname}`;

    p = document.querySelector("#email");
    p.textContent = `You signed up for the Game Software newsletter with the email ${email}`;

    p = document.querySelector("#age");
    p.textContent = `You said you are in the ${ageRange.value} age range`;
    
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