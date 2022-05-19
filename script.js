const myContainer = document.getElementById('main-container');
const mySelect = document.getElementById('filter-type');
let divEl;
let iEl;
let h4El;
let h4UpperText

// RIPETO PER QUANTE VOLTE NECESSARIO
for (let i = 0; i < myArr.length; i ++) {
    createCardFunc(`${myArr[i].family} ${myArr[i].prefix}${myArr[i].name}`, myArr[i].name, myArr[i].color);
};

// CREO UN SELECT CHE DIFFERENZI LE VARIE ICONE



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