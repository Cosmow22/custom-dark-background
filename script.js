(async () => {
    const { backgroundColor } = await browser.storage.local.get("backgroundColor");
    const { defaultBackground } = await browser.storage.local.get("defaultBackground");
    
    if (defaultBackground !== false && backgroundColor) {
        document.documentElement.style.setProperty(
            "--custom-background-color", backgroundColor
        );
    } else {
        document.documentElement.style.removeProperty(
            "--custom-background-color"
        );
    }
    
})();