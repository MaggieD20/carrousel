(function () {
    console.log("jcxvdsjv");
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector(".galerie");

    let carrousel__figure = document.querySelector(".carrousel__figure");
    // console.log(carrousel__figure.tagName);
    let galerie__img = galerie.querySelectorAll("img"); //collection des images

    let carrousel__form = document.querySelector(".carrousel__form");

    let bouton_gauche = document.querySelector(".fleche_gauche");
    let bouton_droite = document.querySelector(".fleche_droite");
    bouton_gauche.addEventListener("mousedown", ReculerImage());

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add("carrousel--ouvrir");
    })
    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove("carrousel--ouvrir");
    })

    let index = 0;
    for (const elm of galerie__img) {

        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index++;
    }

    /**
           * creer une image du carrousel à partir d'une image de la galerie
           * @param {*} index numérode l,image
           * @param {*} elm image de la galerie
           */
    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.dataset.index = index;
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
    }

    /**
     * creer les boutons radios dans le carrousel
     * @param {*} index numéro radio bouton
     */
    function creer_radio_carrousel() {
        // creer nouvel input
        let carrousel__radio = document.createElement("input");
        // modifier le type = radio
        carrousel__radio.type = 'radio';
        // name
        carrousel__radio.name = 'btn__radio';
        // dataset index
        carrousel__radio.dataset.index = index;
        // ajouter le radiocarrousel au formulaire
        carrousel__form.appendChild(carrousel__radio);
        // écouteur evenement 'change'
        carrousel__radio.addEventListener("change", function (e) {
            for (const elm of carrousel__figure.children) {
                elm.style.opacity = 0;
            }
            carrousel__figure.children[e.target.dataset.index].style.opacity = 1;
        });
        // initialiser le style.opacity=0; pour l'ensemble des images 
        // initialise l'image sélectionnée à stylle.opacity=1;

    }

    function ReculerImage() {



    }

})()

