document.getElementById("main-action").onclick = function () {
    document.getElementById("lessons").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("lesson-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("e-mail").value === "") {
        alert("Заполните поле e-mail!");
    } else if (document.getElementById("problem").value === "") {
        alert("Заполните поле с проблемой!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 10) + 'px,' + ((event.clientY * 0.3) / 10) + 'px,0px)';
    });
});
