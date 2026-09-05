const hex = new RegExp("^#(?:[0-9a-fA-F]{3,4}){1,2}$");
const rgb = new RegExp("^rgb\\((25[0-5]|2[0-4]\\d|1?\\d?\\d),\\s*(25[0-5]|2[0-4]\\d|1?\\d?\\d),\\s*(25[0-5]|2[0-4]\\d|1?\\d?\\d)\\)$");

const applyButton = document.getElementById("apply-button");
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

applyButton.addEventListener("click", () => {
    let color = colorInput.value;
    if (hex.test(color) || rgb.test(color)) {
        browser.storage.local.set({ backgroundColor: colorInput.value });
        window.location.href = "refresh/refresh.html";
    } else {
        window.location.href = "error/error.html";
    }
});

defaultBackground.addEventListener("change", () => {
    browser.storage.local.set({
        defaultBackground: defaultBackground.checked
    });
});
