{
    const currentUrl = location.href;
    console.log(currentUrl);


    if (currentUrl == "https://love-to-code108.github.io/navbar/index.html") {
        const home = document.getElementsByClassName("whiteUrl");
        home[0].style.backgroundColor = "white";
        console.log(currentUrl);
    }


    else if (currentUrl == "https://love-to-code108.github.io/navbar/profiles.html") {
        const home = document.getElementsByClassName("whiteUrl");
        home[1].style.backgroundColor = "white";
        console.log(currentUrl);
    }
}



const openUrl = (a)=>{
    if(a == 1){
        window.open("https://love-to-code108.github.io/navbar/index.html","_self");


    }else if(a == 2){
        window.open("https://love-to-code108.github.io/navbar/profiles.html","_self");


    }else if(a == 3){

    }
}

