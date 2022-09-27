window.setInterval(() => {
    clock();
}, 1000);

window.addEventListener("load", () => {
    const clockContainer = document.getElementById("clock-container");
    const hms = ["h", "m", "s"];
    for(let i = 0; i < 3; i++) {
        const groupLetter = hms[i];
        const divOne = document.createElement("div");
        divOne.classList.add("group1");
        const stop = groupLetter === "h" ? 2 : 3;
        for(let j = 0; j < stop; j++) {
            const div = document.createElement("div");
            div.classList.add(groupLetter + "-1");
            div.classList.add("circle");
            divOne.innerHTML += div.outerHTML;
        }

        clockContainer.innerHTML += divOne.outerHTML;

        const divTwo = document.createElement("div");
        divTwo.classList.add("group2");
        for(let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.classList.add(groupLetter + "-2");
            div.classList.add("circle");
            divTwo.innerHTML += div.outerHTML;
        }
        clockContainer.innerHTML += divTwo.outerHTML;

    }
});


function tick(item) {
    let [n, htmlCollection] = item;
    let bits = Array.from(htmlCollection).reverse();
    let value = n + "=";
    for(let i = 0; i < bits.length; ++i) {
        if((n >> i) & (1 == 1)) {
            value += "1";
            bits[i].style.opacity = "1.0";
            bits[i].style.boxShadow = "0 0 4px 4px #22e122";
        }
        else {
            value += "0";
            bits[i].style.opacity = "0.2";
            bits[i].style.boxShadow = "0 0 0 0 #000"; 
        }
    }
    console.log(value);
}

function clock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = [
        [seconds % 10, document.getElementsByClassName("s-2")],
        [(seconds - (seconds % 10)) / 10, document.getElementsByClassName("s-1")],
        [minutes % 10, document.getElementsByClassName("m-2")],
        [(minutes - (minutes % 10)) / 10, document.getElementsByClassName("m-1")],
        [hours % 10, document.getElementsByClassName("h-2")],
        [(hours - (hours % 10)) / 10, document.getElementsByClassName("h-1")]
    ]

    time.forEach(tick);
}