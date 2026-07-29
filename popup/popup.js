const btn = document.getElementById("btn");
const colorInput = document.getElementById("color");

btn.addEventListener("click", () => {
    console.log(colorInput.value, "is set")
    browser.storage.local.set({ backgroundColor: colorInput.value });
});
