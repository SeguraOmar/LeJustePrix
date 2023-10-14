let myImages = [
  ['Manette PS5', 'Image1.jpg', 60],
  ['Watercooling Frozen Notte', 'Image2.jpg', 85],
  ['SSD NVME 1TO', 'Image3.jpg', 43],
  ["Ventilateur TL C-12 C-S", "Image4.jpg", 8],
  ["Boitier NZXT H5 FLOW", "Image5.jpg", 100]
];

let essaisRestants = 10;
let prixDevine;
let indiceAleatoire;

function afficherImageAleatoire() {
 
  let nomObjetElement = document.getElementById("nomObjet");
  let imageObjetElement = document.getElementById("imageObjet");
  let prixElement = document.getElementById("prix");
  let guessInput = document.getElementById("guess");
  let essaisRestantsElement = document.getElementById("essaisRestants");
  let messageElement = document.getElementById("message");

  essaisRestantsElement.textContent = "Essais restants : " + essaisRestants;
  messageElement.textContent = ""; 

  if (essaisRestants > 0) {
      if (indiceAleatoire === undefined) {
          
          indiceAleatoire = Math.floor(Math.random() * myImages.length);
      }
      
      nomObjetElement.textContent = myImages[indiceAleatoire][0];
      imageObjetElement.src = "image/" + myImages[indiceAleatoire][1];

      
      guessInput.value = "";
      prixElement.textContent = "???";
      prixElement.style.display = "none";
  } else {
      
      nomObjetElement.textContent = "Vous avez épuisé vos essais !";
      imageObjetElement.src = "image/question_mark.jpg"; 
      prixElement.textContent = "Prix : $" + myImages[indiceAleatoire][2].toFixed(2);
      prixElement.style.display = "block";
      guessInput.style.display = "none";
      essaisRestantsElement.style.display = "none";
  }
}

function devinerPrix() {
  let guessInput = document.getElementById("guess");
  let prixElement = document.getElementById("prix");
  let essaisRestantsElement = document.getElementById("essaisRestants");
  let messageTropBas = document.getElementById("messageTropBas");
  let messageTropEleve = document.getElementById("messageTropEleve");

  let guess = parseFloat(guessInput.value);
  essaisRestants--;

  if (guess === myImages[indiceAleatoire][2]) {
    prixElement.textContent = "Bravo ! Vous avez deviné le bon prix : $" + myImages[indiceAleatoire][2].toFixed(2);
    prixElement.style.display = "block";
    essaisRestantsElement.style.display = "none";
    messageTropBas.textContent = ""; // Réinitialisez le message "trop bas"
    messageTropEleve.textContent = ""; // Réinitialisez le message "trop élevé"
    messageFelicitation.textContent = "Félicitations ! Vous avez deviné le bon prix.";
} else if (guess < myImages[indiceAleatoire][2]) {
    messageTropBas.textContent = "Le montant est trop bas.";
    messageTropEleve.textContent = ""; // Réinitialisez le message "trop élevé"
    messageFelicitation.textContent = ""; // Réinitialisez le message de félicitations
} else {
    messageTropEleve.textContent = "Le montant est trop élevé.";
    messageTropBas.textContent = ""; // Réinitialisez le message "trop bas"
    messageFelicitation.textContent = ""; // Réinitialisez le message de félicitations
}

// ... (autres parties de la fonction restent inchangées)
}

  
  afficherImageAleatoire();



afficherImageAleatoire();