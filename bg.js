
if (localStorage.getItem("bg_url") == null) {
    localStorage.setItem("bg_url", "https://www.loliapi.com/acg/pc/");
    bg_url = localStorage.getItem("bg_url");
} else {
    bg_url = localStorage.getItem("bg_url");
}
var screen_width = screen.width;
console.debug(screen_width);
document.body.style.backgroundSize = String(screen_width) + "px";
document.body.style.backgroundImage = "url('" + bg_url + "')";
