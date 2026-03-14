const themes = ["orange", "blue", "green"];

/*---------------------------------------------------
    Set theme for this subdomain only
----------------------------------------------------*/
function setTheme(theme) {

    if (!themes.includes(theme)) return;

    const hostname = window.location.hostname;

    // Apply theme instantly
    document.documentElement.setAttribute("data-theme", theme);

    // Save theme in DB
    fetch("../../Admin-Login/saveTheme.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "theme=" + theme + "&subdomain=" + hostname
    })
    .then(r => r.json())
    .then(res => {
        if (res.status === "success") {
            alert("Theme changed to " + theme.toUpperCase());
            highlightSelectedButton(theme);
        } else {
            alert("Error: " + res.message);
        }
    })
    .catch(() => alert("Server error"));
}

/*---------------------------------------------------
    Highlight selected button
----------------------------------------------------*/
function highlightSelectedButton(theme) {
    document.querySelectorAll(".theme-btn").forEach(btn =>
        btn.classList.remove("active")
    );
    const btn = document.getElementById("theme-" + theme);
    if (btn) btn.classList.add("active");
}

/*---------------------------------------------------
    Load theme for this subdomain from DB
----------------------------------------------------*/
function loadSavedTheme() {

    const hostname = window.location.hostname;

    fetch("/getTheme.php?host=" + hostname)
        .then(r => r.json())
        .then(data => {
            const theme = data.theme || "orange";
            document.documentElement.setAttribute("data-theme", theme);
            highlightSelectedButton(theme);
        })
        .catch(err => console.error("Theme load error", err));
}

loadSavedTheme();

/*---------------------------------------------------
    Button events
----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("theme-blue"))
        document.getElementById("theme-blue").onclick = () => setTheme("blue");
    if (document.getElementById("theme-orange"))
        document.getElementById("theme-orange").onclick = () => setTheme("orange");
    if (document.getElementById("theme-green"))
        document.getElementById("theme-green").onclick = () => setTheme("green");
});
