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
  let messageFelicitation = document.getElementById("messageFelicitation");
  let rechargerPageButton = document.getElementById("rechargerPage");

  let guess = parseFloat(guessInput.value);
  essaisRestants--;

  // Pour mettre à jour les essais qui restent
  essaisRestantsElement.textContent = "Essais restants : " + essaisRestants;

  if (guess === myImages[indiceAleatoire][2]) {
      prixElement.textContent = "Bravo ! Vous avez deviné le bon prix : $" + myImages[indiceAleatoire][2].toFixed(2);
      prixElement.style.display = "block";
      essaisRestantsElement.style.display = "none";
      messageTropBas.textContent = ""; 
      messageTropEleve.textContent = ""; 
      messageFelicitation.textContent = "Félicitations ! Vous avez deviné le bon prix.";
      
      // Bouton de rechargement de la page
      rechargerPageButton.style.display = "block";
  } else if (guess < myImages[indiceAleatoire][2]) {
      messageTropBas.textContent = "Le montant est trop bas.";
      messageTropEleve.textContent = ""; 
      messageFelicitation.textContent = ""; 
  } else {
      messageTropEleve.textContent = "Le montant est trop élevé.";
      messageTropBas.textContent = ""; 
      messageFelicitation.textContent = ""; 
  }

  if (essaisRestants === 0 || guess === myImages[indiceAleatoire][2]) {
      guessInput.style.display = "none";
      rechargerPageButton.style.display = "block";
  }
  
  if (essaisRestants === 0) {
      messageTropBas.textContent = "Vous avez épuisé vos essais.";
  }

 
  afficherImageAleatoire();
}

// Rechargement de la page 
let rechargerPageButton = document.getElementById("rechargerPage");
rechargerPageButton.addEventListener("click", function () {
    location.reload(); 
});




afficherImageAleatoire();