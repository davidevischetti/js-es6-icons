const myContainer = document.getElementById('main-container');
const mySelect = document.getElementById('filter-type');
let divEl;
let iEl;
let h4El;
let h4UpperText

// CICLO PER RIPETERE LA FUNZIONE DI CREAZIONE HTML
for (let i = 0; i < myArr.length; i ++) {
    createCardFunc(`${myArr[i].family} ${myArr[i].prefix}${myArr[i].name}`, myArr[i].name, myArr[i].color);
};

// CREO ARREY DIFFERENZIATI A SECONDA DELLA TIPOLOGIA DELL OBJECT
const animalsArr = myArr.filter(obj => obj.type == 'animal');
console.log(animalsArr);

const vegetablesArr = myArr.filter(obj => obj.type == 'vegetable');
console.log(vegetablesArr);

const usersArr = myArr.filter(obj => obj.type == 'user');
console.log(usersArr);

// EVENTO PER GESTIRE IL SELECT
mySelect.addEventListener ('change', function () {
    if (this.value == 'animals') {
        myContainer.innerHTML = "";
        for (let i = 0; i < animalsArr.length; i ++) {
            createCardFunc(`${animalsArr[i].family} ${animalsArr[i].prefix}${animalsArr[i].name}`, animalsArr[i].name, animalsArr[i].color);
        };
    } else if (this.value == 'vegetables') {
        myContainer.innerHTML = "";
        for (let i = 0; i < vegetablesArr.length; i ++) {
            createCardFunc(`${vegetablesArr[i].family} ${vegetablesArr[i].prefix}${vegetablesArr[i].name}`, vegetablesArr[i].name, vegetablesArr[i].color);
        };
    } else if (this.value == 'users') {
        myContainer.innerHTML = "";
        for (let i = 0; i < usersArr.length; i ++) {
            createCardFunc(`${usersArr[i].family} ${usersArr[i].prefix}${usersArr[i].name}`, usersArr[i].name, usersArr[i].color);
        };
    } else {
        myContainer.innerHTML = "";
        for (let i = 0; i < myArr.length; i ++) {
            createCardFunc(`${myArr[i].family} ${myArr[i].prefix}${myArr[i].name}`, myArr[i].name, myArr[i].color);
        };
    };

});

// FUNZIONE PER CREARE LA STRUTTURA HTML
function createCardFunc (iconClass, h4Text, iconColorClass) {
    // CREO GLI ELEMENTI HTML NECESSARI
    divEl = document.createElement('div');
    divEl.className = 'card';
    myContainer.append(divEl);
    
    iEl = document.createElement('i');
    // INSERISCO LE CLASSI DELLE ICONE DI FONTAWESOME
    iEl.className = iconClass;
    iEl.classList.add(iconColorClass)
    divEl.append(iEl);
    
    h4El = document.createElement('h4');
    // E IL NOME ASSOCIATO ATTRAVERSO LE CHIAVI DEGLI OBJECT
    h4UpperText = h4Text.toUpperCase();
    h4El.innerText = h4UpperText;
    divEl.append(h4El);

    return;
};