window.addEventListener("load", function (e) {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#nameInput");
    const startBtn = document.querySelector("#startBtn");
    const forgetBtn = document.querySelector("#forgetBtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    startBtn.addEventListener("click", function () {
        localStorage.setItem("name", nameInput.value);
        window.location.href = "picnic_choice1.html";
    });

    forgetBtn.addEventListener("click", function () {
        localStorage.removeItem("name");
        forgetBtn.style.display = "none";
    });

    const name = localStorage.getItem("name");
    if (name) {
        nameInput.value = name;
        forgetBtn.style.display = "block";
    }
}, false)