const hex = new RegExp("^#(?:[0-9a-fA-F]{3,4}){1,2}$");
const rgb = new RegExp("^rgb\\((25[0-5]|2[0-4]\\d|1?\\d?\\d),\\s*(25[0-5]|2[0-4]\\d|1?\\d?\\d),\\s*(25[0-5]|2[0-4]\\d|1?\\d?\\d)\\)$");


const btn = document.getElementById("btn");
const colorInput = document.getElementById("color");
const defaultBackground = document.getElementById("default-background");

browser.storage.local.get([
    "backgroundColor",
    "defaultBackground"
]).then((result) => {
    
    defaultBackground.checked = result.defaultBackground ?? false;

    if (result.backgroundColor) {
        colorInput.value = result.backgroundColor;
    }
});

btn.addEventListener("click", () => {
    let color = colorInput.value;
    console.log("the input color is: " + color);
    if (hex.test(color) || rgb.test(color)) {
        console.log("the input format is correct");
        const error = document.getElementById("error-message");
        if (error) { error.remove();}
        browser.storage.local.set({ backgroundColor: colorInput.value });
        window.location.href = "refreshpage/refresh.html";
    } else {
        console.log("the input format is incorrect");
        const error = document.getElementById("error-message");
        if (!error) {
            const p = document.createElement("p");
            p.id = "error-message";
            p.textContent = "⚠️ Invalid color format.";
            document.body.appendChild(p);
         }
    }
});

defaultBackground.addEventListener("change", () => {
    browser.storage.local.set({
        defaultBackground: defaultBackground.checked
    });
});