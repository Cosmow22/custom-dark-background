(async () => {
    const { backgroundColor } =
        await browser.storage.local.get("backgroundColor");

    document.documentElement.style.setProperty(
        "--custom-background-color",
        backgroundColor || "#1E222F"
    );
})();