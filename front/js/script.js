import {makeAnchor, makeImage, makeH3, makeParagraph, appendElementsToArticle, appendItems} from "./script_function.js"

// Je crée un panier vide s'il n'existe pas dans le localstorage
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]))
};
let localStorageCart = JSON.parse(localStorage.getItem('cart'));
if ( localStorageCart === null || localStorageCart.lenght === 0 ) {
  totalQuantity.textContent = '0';
  totalPrice.textContent = '0'; 
};

// Récupération données de l'API.
fetch("http://localhost:3000/api/products")
  .then ((res) => res.json())
  .then ((data) => {addProducts(data)});

// Affichage des produits sur la page d'acceuil

function addProducts(kanaps){

  kanaps.forEach (kanap =>{
   const {_id, imageUrl, altTxt, name, description } = kanap
   const anchor = makeAnchor(_id)
   const article = document.createElement("article")
   const image = makeImage(imageUrl,altTxt)
   const h3 = makeH3(name)
   const p = makeParagraph(description)

   appendElementsToArticle(article, [image, h3, p])
   appendItems(anchor,article) 
  }) 
};



