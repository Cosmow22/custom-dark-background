const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", () => {
    browser.tabs.reload();
});