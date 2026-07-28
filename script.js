(async () => {
    const { backgroundColor } =
        await browser.storage.local.get("backgroundColor");

    document.documentElement.style.setProperty(
        "--my-background",
        backgroundColor || "#262C3C"
    );
})();