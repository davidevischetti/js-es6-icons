// VARIABILI DI RICHIAMO ELEMENT HTML
const myContainer = document.getElementById('main-container');
const mySelect = document.getElementById('filter-type');
let divEl;
let iEl;
let h4El;
let h4UpperText

// RICHIAMO FUNZIONE PER CREARE HTML
createSwitchCardFunc (myArr);

// EVENTO PER GESTIRE IL SELECT
mySelect.addEventListener ('change', function () {
    if (this.value == 'animals') {
        const animalsArr = myArr.filter(obj => obj.type == 'animal');
        createSwitchCardFunc (animalsArr);
    } else if (this.value == 'vegetables') {
        const vegetablesArr = myArr.filter(obj => obj.type == 'vegetable');
        createSwitchCardFunc (vegetablesArr);
    } else if (this.value == 'users') {
        const usersArr = myArr.filter(obj => obj.type == 'user');
        createSwitchCardFunc (usersArr);
    } else {
        createSwitchCardFunc (myArr);
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

// FUNZIONE PER INSERIRE LE CARD
function createSwitchCardFunc (arr) {
    myContainer.innerHTML = "";
    arr.forEach(element => {
        createCardFunc(`${element.family} ${element.prefix}${element.name}`, element.name, element.color);
    });
};