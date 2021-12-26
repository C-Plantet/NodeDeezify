/**
 * JS de MainMenu
 */

let bouton = document.getElementById("bouton");
let formulaire = document.getElementById("formulaire");

function affiche(){
  
  
  if(getComputedStyle(formulaire).display == "none"){
    formulaire.style.display = "flex";
  } else {
    formulaire.style.display = "none";
  }
}

bouton.onclick=affiche();

