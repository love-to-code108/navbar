const currentUrl = location.href;
if(currentUrl == "http://127.0.0.1:5500/index.html"){
    const home = document.getElementsByClassName(".whiteUrl")[0].style.color = "red";
    console.log(currentUrl);
}
