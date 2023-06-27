{
    const currentUrl = location.href;
    console.log(currentUrl);


    if (currentUrl == "http://127.0.0.1:5500/index.html") {
        const home = document.getElementsByClassName("whiteUrl");
        home[0].style.backgroundColor = "white";
        console.log(currentUrl);
    }


    else if (currentUrl == "http://127.0.0.1:5500/profiles.html") {
        const home = document.getElementsByClassName("whiteUrl");
        home[1].style.backgroundColor = "white";
        console.log(currentUrl);
    }
}



const openUrl = (a)=>{
    if(a == 1){
        window.open("http://127.0.0.1:5500/index.html","_self");


    }else if(a == 2){
        window.open("http://127.0.0.1:5500/profiles.html","_self");


    }else if(a == 3){

    }
}

