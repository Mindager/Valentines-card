
function first(){
    document.querySelector("body > div > div.heartContainer > button > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div").classList.remove("color1");

    document.querySelector("body > div > div.heartContainer > button> div > div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div > div").classList.remove("color2");

    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.remove("color3");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.remove("color1");

    document.querySelector("body > div > div.heartContainer> button> div > div > div > div > div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div").classList.remove("color2");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.remove("color3");
}
function second(){
    document.querySelector("body > div > div.heartContainer > button> div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div").classList.remove("color2");

    document.querySelector("body > div > div.heartContainer > button> div > div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div > div").classList.remove("color3");

    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.remove("color1");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.remove("color2");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div").classList.remove("color3");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.remove("color1");
}
function third(){
    document.querySelector("body > div > div.heartContainer > button> div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div").classList.remove("color3");

    document.querySelector("body > div > div.heartContainer > button> div > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div > div").classList.remove("color1");

    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div > div > div").classList.remove("color2");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.add("color1");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div").classList.remove("color3");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div").classList.add("color2");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div").classList.remove("color1");

    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.add("color3");
    document.querySelector("body > div > div.heartContainer > button> div > div > div > div > div > div").classList.remove("color2");
}

let intervalId; 
function main() {

    clearInterval(intervalId);


    setTimeout(() => {
        first();
    }, 200);

    setTimeout(() => {
        second();
    }, 400);

    setTimeout(() => {
        third();
    }, 800);


    intervalId = setInterval(main, 1000);
}

main();