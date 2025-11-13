const main = document.querySelector(".main");

let counter;
let shower;

let fasciaTop;
let fasciaBottom;

let displayBtns;

let btnPlus;
let btnReset;
let btnMinus; 

let display; 
let value = 0;

function stileDisplay() {
    display = document.createElement("div");
    display.classList.add("display");
    display.textContent = value; 

    Object.assign(display.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "90px",
        fontFamily: "Roboto Mono, monospace",
        color: "#fff",
        height: "100px",
    });
};

function creaDisplayBtns() {
    displayBtns = document.createElement("div");
    displayBtns.classList.add("displayBtns");

    Object.assign(displayBtns.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "20px",
        marginRight: "20px",
        gap: "10px",
    });

    btnPlus = document.createElement("button");
    btnPlus.classList.add("btn");
    btnPlus.classList.add("btnPlus");
    btnPlus.textContent = "+";
    Object.assign(btnPlus.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "100px",
        backgroundColor: "#1E90FF",
        border: "none",
        borderRadius: "10px",
        fontSize: "40px",
        color: "#fff",
        cursor: "pointer",
    });

    btnReset = document.createElement("button");
    btnReset.classList.add("btn");
    btnReset.classList.add("btnReset");
    btnReset.textContent = "↺";
    Object.assign(btnReset.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "100px",
        padding: "10px 20px",
        backgroundColor: "black",
        border: "1px solid #1E90FF",
        borderRadius: "10px",
        fontSize: "40px",
        color: "#1E90FF",
        cursor: "pointer",
    });

    btnMinus = document.createElement("button");
    btnMinus.classList.add("btn");
    btnMinus.classList.add("btnMinus");
    btnMinus.textContent = "-";
    Object.assign(btnMinus.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "100px",
        padding: "10px 20px 15px 20px",
        backgroundColor: "#1E90FF",
        border: "none",
        borderRadius: "10px",
        fontSize: "40px",
        color: "#fff",
        cursor: "pointer",
    });

    [btnPlus, btnReset, btnMinus].forEach(btn => {

        
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
        });
    
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    
        
        btn.addEventListener("pointerdown", () => {
            btn.style.transform = "scale(1)";
        });
    
        btn.addEventListener("pointerup", () => {
            btn.style.transform = "scale(1.1)";  
        });
    
       
        btn.style.transition = "transform 0.3s ease";
    });
    

    displayBtns.append(btnMinus);
    displayBtns.append(btnReset);
    displayBtns.append(btnPlus);
};


function stileCounter() {
    counter = document.createElement("div");
    counter.classList.add("counter");

    Object.assign(counter.style, {
        display: "flex",
        backgroundColor: "#0D0F10",
        borderRadius: "11px",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "min(90%, 400px)",
        height: "min(70vh, 500px)",
        marginLeft: "30px",
        marginRight: "30px",
        overflow: "hidden" 
    });
};


function stileFascie() {
    // fascia sopra
    fasciaTop = document.createElement("div");
    fasciaTop.classList.add("fascia");
    Object.assign(fasciaTop.style, {
        backgroundColor: "#1E90FF",
        height: "30px",
        borderTopLeftRadius: "11px",
        borderTopRightRadius: "11px"
    });

    // fascia sotto
    fasciaBottom = document.createElement("div");
    fasciaBottom.classList.add("fascia");
    Object.assign(fasciaBottom.style, {
        backgroundColor: "#1E90FF",
        height: "30px",
        borderBottomLeftRadius: "11px",
        borderBottomRightRadius: "11px"
    });
};

function stileShower() {
    shower = document.createElement("div");
    shower.classList.add("shower");

    Object.assign(shower.style, {
        backgroundImage: "url('assets/img/shower.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "50vw",
        marginRight: "-100px",
        cursor: "pointer",
        transition: "background-image 0.3s ease",
    });

    shower.addEventListener("mouseenter", () => {
        shower.style.backgroundImage = "url('assets/img/showerHover.png')";
    });
    shower.addEventListener("mouseleave", () => {
        shower.style.backgroundImage = "url('assets/img/shower.png')";
    });
    shower.addEventListener("pointerdown", () => {
        window.open("https://github.com/AntonioDS1/html-counter", "_blank");
    });
};

function loadCounter() {

    stileCounter();

    stileFascie();

    stileDisplay();

    creaDisplayBtns();

    main.appendChild(counter);

    counter.prepend(fasciaTop);

    counter.append(display);

    counter.append(displayBtns);

    counter.append(fasciaBottom);
};

function loadShower() {
    
    stileShower();
    main.appendChild(shower);
};

loadCounter();
loadShower();

btnPlus.addEventListener("click", function incrementa() {
    value++;
    display.textContent = value; 
});

btnReset.addEventListener("click", function resetta() {
    value = 0;
    display.textContent = value; 
});

btnMinus.addEventListener("click", function decrementa() {
    if (value===0) {
        let risposta = confirm("Vuoi procedere verso i numeri negativi?");
        if (!risposta) return;
    }
    value--;
    display.textContent = value; 
});
