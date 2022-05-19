const myContainer = document.getElementById('main-container');

// RIPETO PER QUANTE VOLTE NECESSARIO
for (let i = 0; i < myArr.length; i ++) {
    createCardFunc(`${myArr[i].family} ${myArr[i].prefix}${myArr[i].name}`, myArr[i].name);
};





// ASSEGNO IL COLORE GIUSTO ALLE ICONE

// CREO UN SELECT CHE DIFFERENZI LE VARIE ICONE


// FUNZIONE PER CREARE LA STRUTTURA HTML
function createCardFunc (iconClass, h4Text) {
    // CREO GLI ELEMENTI HTML NECESSARI
    let divEl = document.createElement('div');
    divEl.className = 'card';
    myContainer.append(divEl);
    
    let iEl = document.createElement('i');
    // INSERISCO LE CLASSI DELLE ICONE DI FONTAWESOME
    iEl.className = iconClass;
    divEl.append(iEl);
    
    let h4El = document.createElement('h4');
    // E IL NOME ASSOCIATO ATTRAVERSO LE CHIAVI DEGLI OBJECT
    h4El.innerText = h4Text;
    divEl.append(h4El);

    return;
};