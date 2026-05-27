const SUBMIT = document.querySelector("#submit");
const RESET = document.querySelector("#resetBtn");

SUBMIT.addEventListener('click', processForm);
RESET.addEventListener('click', resetForm);

function processForm(event){
    let out = ``;
    let form = document.querySelector("#email-form");

    let fname = form.elements["fname"].value;
    let lname = form.elements["lname"].value;
    let email = form.elements["email"].value;
    let sectorBoxes = document.querySelectorAll("input[name='sector']:checked");
    let ageRange = document.querySelector("input[name='age-range']:checked");

    if(fname == "" || lname == "" || email == "" || ageRange == null){
        alert("Please Provide Input For All Required Fields");
        event.preventDefault();
        return false;
    }

    out += `Hello, ${fname} ${lname}\n`;
    out += `You signed up for the Game Software newsletter with the email: ${email} \n`;
    out += `You said you are in the ${ageRange.value} age range \n`

    let sectorText = `You selected news for the sectors: `;
    for(let sector of sectorBoxes){
        sectorText += sector.value + ', ';
    }
    if(sectorBoxes.length == 0){
        sectorText += 'no sectors selected';
    }
    
    out += sectorText + `\n`;
    out += `Additional Notes: ${form.elements['additional-text'].value}`

    alert(out);

    window.close();
}

function resetForm(event){
    event.preventDefault();
    document.querySelector("#email-form").reset();
}