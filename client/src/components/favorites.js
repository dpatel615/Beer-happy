import React from "react";

function Favorites(element) {

  favIcons = document.querySelectorAll('i');
  favIcons.forEach(favIcon => favStatus(favIcon));

    //post call that should redirect if not logged in
    fetch(`/api/users/favorite/${element.getAttribute('drinkid')}`, {
      method: 'PUT'
    });

    if (JSON.parse(element.getAttribute('isFav'))){
      element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent)-1; 
      element.setAttribute('isFav', 'false');
    }
    else {
      element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent)+1;
      element.setAttribute('isFav', 'true');
    }

    favStatus(element);
  }

  function favStatus(element){
    if (JSON.parse(element.getAttribute("isFav"))) {
      element.classList.remove('fa-heart-o');
    }
    else {
      element.classList.add('fa-heart-o');
    }
  }

export default Favorites;