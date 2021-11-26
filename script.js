// 1

let mdpBtn = document.getElementById('mdp-btn');
let mdp = document.getElementById('mdp');

mdpBtn.addEventListener('click', showMdp);

/**
 * Génère un mot de passe aléatoire et l'affiche sur la page
 */
function showMdp() {
    mdp.innerHTML = escapeHtml(getMdp(16));
}

/**
 * Retourne un mot de passe aléatoire
 * 
 * @param {number} length nombre de caractères
 * @returns {string} Mot de passe
 */
function getMdp(length) {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let nbChars = chars.length;
    let mdp = '';
    for (let i = 0; i < length; i++) {
        mdp += chars.charAt(Math.floor(Math.random() * nbChars));
    }
    console.log(mdp);
    return mdp;
}

/**
 * Echappe les caractères du mot de passe pour les rendre affichable sur la page en HTML
 * 
 * @param {string} mdp Mot de passe 
 * @returns {string} Mot de passe échappé
 */
function escapeHtml(mdp){
    return new Option(mdp).innerHTML;
}


// 2

let convMode = true; // true : °C en °F / false : °F en °C
let convBtn = document.getElementById('conv-btn');
let invBtn = document.getElementById('inv-btn');
let convTitre = document.getElementById('conv-titre');
let degresInput = document.getElementById('degres');
let uniteeEntree = document.getElementById('unitee-entree');
let result = document.getElementById('result');
let uniteeResult = document.getElementById('unitee-result');

convBtn.addEventListener('click', convertir);
invBtn.addEventListener('click', inverser);

function convertir() {
    let input = degresInput.value;
    if (!isNaN(parseFloat(input))) {
        parseFloat(input)
        if (convMode) {
            result.innerHTML = celciusToFahrenheit(input);
        } else {
            result.innerHTML = fahrenheitToCelcius(input);
        }
    }
}

/**
 * Convertit des degrés Celcius en Fahrenheit
 * 
 * @param {number} degres Degrés en Celcius
 * @returns {number} Degrés en Fahrenheit
 */
function celciusToFahrenheit(degres) {
    return Number(degres * 1.8 + 32).toFixed(2);
}

/**
 * Convertit des degrés Fahrenheit en Celcius
 * 
 * @param {number} degres Degrés en Fahrenheit
 * @returns {number} Degrés en Celcius
 */
function fahrenheitToCelcius(degres) {
    return Number((degres - 32) / 1.8).toFixed(2);
}

/**
 * Inverse le mode de conversion
 */
function inverser() {
    if (convMode) {
        convMode = false;
        convTitre.innerHTML = 'Convertisseur de degrés Fahrenheit en Celsius';
        uniteeEntree.innerHTML = 'F';
        uniteeResult.innerHTML = 'C';
    } else {
        convMode = true;
        convTitre.innerHTML = 'Convertisseur de degrés Celsius en Fahrenheit';
        uniteeEntree.innerHTML = 'C';
        uniteeResult.innerHTML = 'F';
    }
}


// 3

let citBtn = document.getElementById('cit-btn');
let citBloc = document.getElementById('cit-bloc');
let citation = document.getElementById('citation');
let fermCit = document.getElementById('ferm-cit');

let poem = `Souvent, pour s’amuser, les hommes d’équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l’azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d’eux.
Ce voyageur ailé, comme il est gauche et veule !
Lui, naguère si beau, qu’il est comique et laid !
L’un agace son bec avec un brûle-gueule,
L’autre mime, en boitant, l’infirme qui volait !
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l’archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l’empêchent de marcher.`;

citBtn.addEventListener('click', showCitation);
fermCit.addEventListener('click', closeCitation);

/**
 * Affiche une citation
 */
function showCitation() {
    citation.innerHTML = getCitation(poem);
    citBloc.classList.remove('hidden');
}

/**
 * Retourne une citation du poème passé en paramètre
 * 
 * @param {string} poem Poème 
 * @returns {string} Citation
 */
function getCitation(poem) {
    let lines = poem.split('\n');
    return lines[Math.floor(Math.random() * lines.length)];
}

/**
 * Ferme la citation
 */
function closeCitation() {
    citBloc.classList.add('hidden');
}


// 4

let darkMode = false; // true : mode sombre / false : mode clair
let darkBtn = document.getElementById('dark-btn');

darkBtn.addEventListener('click', darkPage);

function darkPage() {
    if (darkMode) {
        darkMode = false;
        document.body.classList.remove('dark');
        darkBtn.innerHTML = 'Activer';
    } else {
        darkMode = true;
        document.body.classList.add('dark');
        darkBtn.innerHTML = 'Désactiver';
    }
}