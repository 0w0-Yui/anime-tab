
if (localStorage.getItem("bg_url") == null) {
    localStorage.setItem("bg_url", "http://www.dmoe.cc/random.php");
    bg_url = localStorage.getItem("bg_url");
} else {
    bg_url = localStorage.getItem("bg_url");
}
document.body.style.backgroundImage = "url('" + bg_url + "')";
