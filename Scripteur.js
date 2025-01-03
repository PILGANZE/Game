// ==============================
// Sélection des éléments HTML
// ==============================

// Élément où le choix de l'ordinateur sera affiché
let contenantChoixOrdinateur = document.getElementById('choix-ordinateur');

// Élément où le choix de l'utilisateur sera affiché
let contenantChoixUtilisateur = document.getElementById('choix-utilisateur');

// Élément où le résultat (Gagné, Perdu, Égalité) sera affiché
let contenantResultat = document.getElementById('resultat');

// Sélection de tous les boutons dans la zone de choix
let choixPossibles = document.querySelectorAll('.bouttons_choix_jeu button');

// Variables pour stocker les choix et le résultat
let ChoixUtilisateur;
let ChoixOrdinateur;
let resultat;

// ==============================
// Gestion des clics sur les boutons
// ==============================

// Ajouter un événement à chaque bouton de choix
choixPossibles.forEach(choix => {
    choix.addEventListener('click', (e) => {
        // Récupérer l'ID du bouton cliqué (correspondant au choix de l'utilisateur)
        ChoixUtilisateur = e.target.id;

        // Afficher une image correspondant au choix de l'utilisateur
        contenantChoixUtilisateur.innerHTML = `<img src="${ChoixUtilisateur}.PNG" alt="${ChoixUtilisateur}">`;

        // Générer un choix aléatoire pour l'ordinateur
        generer_choix_ordinateur();

        // Afficher une image correspondant au choix de l'ordinateur
        contenantChoixOrdinateur.innerHTML = `<img src="${ChoixOrdinateur}.PNG" alt="${ChoixOrdinateur}">`;

        // Vérifier le résultat (Gagné, Perdu, ou Égalité)
        verification();
    });
});

// ==============================
// Fonction pour générer un choix aléatoire pour l'ordinateur
// ==============================

function generer_choix_ordinateur() {
    // Générer un nombre aléatoire entre 0 et 2
    let random = Math.floor(Math.random() * 3);

    // Associer le nombre aléatoire à un choix
    if (random === 0) {
        ChoixOrdinateur = 'pierre';
    } else if (random === 1) {
        ChoixOrdinateur = 'papier';
    } else {
        ChoixOrdinateur = 'ciseaux';
    }
}

// ==============================
// Fonction pour vérifier le résultat
// ==============================

function verification() {
    // Cas d'égalité
    if (ChoixUtilisateur === ChoixOrdinateur) {
        resultat = "Égalité";

    // Cas où l'utilisateur perd
    } else if (
        (ChoixUtilisateur === "pierre" && ChoixOrdinateur === "papier") ||
        (ChoixUtilisateur === "papier" && ChoixOrdinateur === "ciseaux") ||
        (ChoixUtilisateur === "ciseaux" && ChoixOrdinateur === "pierre")
    ) {
        resultat = "Perdu";

    // Cas où l'utilisateur gagne
    } else {
        resultat = "Gagné";
    }

    // Afficher le résultat dans l'élément prévu
    contenantResultat.textContent = resultat;
}

// ==============================
// Gestion du son avec le bouton de contrôle
// ==============================

// Sélection des éléments audio et bouton
const audioPlayer = document.getElementById('audioPlayer'); // Élément audio
const musicButton = document.getElementById('Music'); // Bouton pour contrôler le son

// Écouter les clics sur le bouton de contrôle de la musique
musicButton.addEventListener('click', () => {
    // Vérifier si l'audio est en lecture
    if (audioPlayer.paused) {
        audioPlayer.play(); // Lancer la lecture
        musicButton.textContent = "🔇"; // Changer l'icône en mode muet
    } else {
        audioPlayer.pause(); // Mettre en pause
        musicButton.textContent = "🎵"; // Remettre l'icône en mode lecture
    }
});

// ==============================
// Lecture automatique du son au chargement de la page
// ==============================

 audioPlayer.play();
