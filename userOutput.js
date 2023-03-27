window.addEventListener("load", function (e) {
  const choiceTxt = document.querySelector("#choicetxt");
  const name = localStorage.getItem("name");
  if (name) {
    choiceTxt.textContent = `Hi ${name}, before we go to the park, what we need to do is prepare our picnic. First, drinks!`;
  }
}, false)