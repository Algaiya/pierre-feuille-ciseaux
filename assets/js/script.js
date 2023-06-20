const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let resultat
let choixOrdinateur

//Evenement 'Click sur les boutons'
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click', (e)=> {
    //Récupération de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;
    //On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="assets/images/${choixUtilisateur}.png">`
    generer_choix_ordinateur();
    verification()
}))


//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
    random = Math.floor(Math.random() * 3) +1; //Générer des nombres compris entre 1 et 3

    if(random === 1){//Si random = 1 :
        choixOrdinateur = "pierre"
    }
    if(random === 2){//Si random = 2 :
        choixOrdinateur = "feuille"
    }
    if(random === 3){//Si random = 3 :
        choixOrdinateur = "ciseaux"
    }
    //On ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="assets/images/${choixOrdinateur}.png">`
}

//Fonction pour vérifier si l'utilisateur a remporté la partie

function verification() {
    if(choixUtilisateur == choixOrdinateur) {
        resultat = "Egalité !";
    }
    //Les cas où le joueur perd la partie
    if(choixUtilisateur == "pierre" && choixOrdinateur == "feuille") {
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "feuille" && choixOrdinateur == "ciseaux") {
        resultat = "Perdu !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "Perdu !";
    }
    //Les cas où le joueur remporte la partie
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "feuille") {
        resultat = "Gagné !";
    }
    if(choixUtilisateur == "feuille" && choixOrdinateur == "pierre") {
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat;
}