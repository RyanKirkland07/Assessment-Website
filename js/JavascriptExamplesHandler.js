const ETCH = document.querySelector("#etch");
const RPS = document.querySelector("#rps");
const FRAME = document.querySelector("#js-example-frame");

function changeExample(event){
    FRAME.setAttribute("src", event.target.value);
}

ETCH.addEventListener('click', changeExample);
RPS.addEventListener('click', changeExample);