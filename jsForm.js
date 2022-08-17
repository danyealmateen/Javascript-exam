class Person {
    constructor(namn, ålder) {
        this.namn = namn;
        this.ålder = parseInt(ålder);


        if (ålder < 18) {
            this.legal = false;
        } else {
            this.legal = true;
        }
    }
    //Omvandlar objektet till en sträng.
    toString() {
        return `${this.namn} ${this.ålder} ${this.legal}`
    }
    //Metoden birthday som ska plussa ålder med 1.
    birthday() {
        this.ålder += 1

        if (this.ålder < 18) {
            this.legal = false;

        } else {
            this.legal = true;
        }
    }
}

let inputName = document.getElementById("inputName")
let inputNumber = document.getElementById("inputNumber")
let inputPassword = document.getElementById("inputPassword")
let errorOutput = document.getElementById("errorOutput");
let messages = document.getElementById("messages");
let form = document.getElementById("form");
let demo = document.getElementById("demo");
let submitBtn = document.getElementById("submitBtn");
let bdayBtn = document.getElementById("bdayBtn");
let arrNames = ["Marcus 33"];
let personArray = [];
let paraHello = document.getElementById("paraHello");
let bdayMessages = document.getElementById("bdayMessages");
let greetMessages = document.getElementById("greetMessages");

//Pushar in objektet Marcus
let marcusData = new Person("Marcus", 33);
personArray.push(marcusData);

//Lyssnar efter ett click event från knappen submitBtn
submitBtn.addEventListener("click", (event) => {

    //Om inputName är en tom sträng, skriv ut "Name is required".
    if (inputName.value === '') {
        errorOutput.innerText = "Name is required";
        return false;
    }
    //Om inputNumber inte är en siffra, skriv ut texten 'Age is required'.
    if (inputNumber.value === '') {
        errorOutput.innerText = "Age is required";
        return false;
    }
    //Om inputPassword inte är Grit skickas det ut ett error meddelande
    if (inputPassword.value !== 'Grit') {
        errorOutput.innerText = 'Wrong Password';
        return false;
    } else errorOutput.innerText = 'Access Granted';

    //Pushar in värden från inputName och inputNumber
    arrNames.push(`${inputName.value} ${inputNumber.value}`)

    //ForEach loop som går igenom arrayen en gång, names representerar ett element i arrayen
    let output2 = "";

    //Loopar igenom arrNames och skriver ut Hello tillsammans med names för varje element i arrayen.
    arrNames.forEach(names => {

        //Lägger till hälsningsfrasen + elementet i arrayen till output += som är en tom sträng
        output2 += `Hello ${names}<br>`;
    });

    //Ersätter paraHello paragrafen med output2 så att saker skrivs ut i slutet av output2.
    paraHello.innerHTML = output2;

    //If else sats där man skriver ut texten legal / not legal beroende på om åldern är under eller över 18
    let isLegal = false;

    //Skriver ut not legal tillsammans med inputnamnet om värdet är under 18.
    if (inputNumber.value < 18) {
        isLegal = false;
        messages.innerHTML = `${inputName.value} Not Legal`;

        //Skriver ut legal tillsammans med inputnamnet om värdet är under 18.  
    } else {
        isLegal = true;
        messages.innerHTML = `${inputName.value} Legal`;
    }
    //Klassen

    //Inhämtar värden från inputname och inputnumber
    let namn = document.getElementById("inputName").value
    let ålder = document.getElementById("inputNumber").value
    let legal = "";

    //Om isLegal är falskt - skriv ut legal i objektet annars not legal
    if (isLegal) {
        legal = "Legal"
    } else {
        legal = "not Legal"
    }

    //Nytt objekt som ska skapas
    let nyttObjekt = new Person(namn, ålder, legal)
    personArray.push(nyttObjekt);
    output = "";

    //Kallar på funktionen updatePersons inuti HTML doc.
    updatePersons();

    //Console log för att kontrollera att allt stämmer
    console.log(nyttObjekt);
    console.log(arrNames);
});

//Kallar på metoden updatePersons
function updatePersons() {
    let output = "";

    //Loop för att omvandla objektets innehåll till en sträng samt skriva ut det.
    for (let i = 0; i < personArray.length; i++) {
        output += `${personArray[i].toString()}<br>`
    }
    demo.innerHTML = output;
}

//Function som gör det möjligt att klicka på b-dayknappen och aktivera funktionen som plusar age med +1.
function birthday() {
    personArray.forEach(person => {
        person.birthday()
    })
    updatePersons();
}

//Funktion för att hälsa på samtliga namn
function greetAll() {
    greetMessages.innerHTML = "";
    const greetArray = personArray;

    personArray.forEach(x => {

        personArray.forEach(y => {

            if (x == y) {
                console.log(`${x + y} kan inte säga haj till saj själv`)
            } else {
                greetMessages.innerHTML += `<p>Hejsan ${y} mitt namn är ${x}</p>`
            }
        });
    });
}














