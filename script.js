// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
const navbar = document.querySelector("nav");
let lastPosition = 0;
window.addEventListener("scroll", function (e) {
  const currentPosition = window.scrollY;
  if (currentPosition > lastPosition) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
  lastPosition = currentPosition;
});

// Faire apparaitre l'image de la partie improvise
window.addEventListener('scroll',(e) =>{
    const actualImgPos = window.scrollY;
    const maxHeight = document.getElementById('adapt').scrollHeight;

    if(maxHeight > actualImgPos ) {
        imgImprovise.style.opacity ='1';
        imgImprovise.style.transform ='translate(0,0)';
    } else {
        imgImprovise.style.opacity ='0';
        imgImprovise.style.transform ='translate(-200px,0)';
    }

  });

// Faire apparaitre la popup quand on est en bas du site
let popupOpen = true;
window.addEventListener('scroll',(e) =>{
    const popupPosition = window.scrollY;
    const heightPopup = document.getElementById('popup').scrollHeight;
    if(heightPopup > popupPosition && popupOpen) {
      popup.style.opacity ='1';
      popup.style.transform ='translate(0)';
    }});
// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
  popupOpen = false;
});
