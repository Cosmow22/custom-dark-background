(async () => {
    const { backgroundColor } = await browser.storage.local.get("backgroundColor");

    document.documentElement.style.setProperty(
        "--custom-background-color", backgroundColor
    );

    const { defaultBackground } = await browser.storage.local.get("defaultBackground");
    
    if (defaultBackground) {
        document.documentElement.classList.add("custom-dark-background");
    }
})();
