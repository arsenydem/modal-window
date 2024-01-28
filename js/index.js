

let openButton = document.querySelector(`#open`);
let closeButton = document.querySelector(`#close`);
let popup = document.querySelector(`#popup`);


function open() {
    popup.classList.remove(`d-none`);
}

function close() {
    popup.classList.add (`d-none`);
}


openButton.addEventListener(`click`, open);
closeButton.addEventListener(`click`, close);

document.addEventListener(`keydown`, function (evt) {
    if (evt.key == `Escape`) {
        close();
    }
    console.log(openButton)
})