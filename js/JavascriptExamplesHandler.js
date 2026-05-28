const FRAME = document.querySelector("#js-example-frame");

FRAME.focus();

function changeExample(event){
    FRAME.setAttribute("src", event.target.value);
}