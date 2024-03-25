const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const inp = document.querySelector(".text");
const buttonSave = document.querySelector("#save");
const buttonDel = document.querySelector("#delete");
//////
const getLocalStorage = () => {
    return localStorage.getItem("text");
};
buttonSave.addEventListener("click", () => {
    if (inp.value.trim()) {
        localStorage.setItem("text", inp.value);
        span.innerText = `сейчас: ${getLocalStorage()}`;
        inp.value = "";
    }
});
////
localStorage.getItem("text")
    ? (span.innerText = `сейчас: ${getLocalStorage()}`)
    : (span.innerText = "ничего нет");

////
buttonDel.addEventListener("click", (e) => {
    localStorage.removeItem("text");
    span.innerText = "ничего нет";
});
