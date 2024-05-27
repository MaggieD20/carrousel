(function () {

    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector(".galerie");

    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie__img = galerie.querySelectorAll("img"); // Collection des images

    let carrousel__form = document.querySelector(".carrousel__form");

    // Aller chercher les flèches
    let bouton_gauche = document.querySelector(".fleche_gauche");
    let bouton_droite = document.querySelector(".fleche_droite");

    // Variables pour gérer l'index de l'image actuelle
    let indexCourant = 0;
    let totalImages = galerie__img.length;

    // Ajouter un event listener aux flèches
    bouton_gauche.addEventListener("mousedown", function () {
        ReculerImage();
    });
    bouton_droite.addEventListener("mousedown", function () {
        AvancerImage();
    });

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add("carrousel--ouvrir");
    });
    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove("carrousel--ouvrir");
    });

    // Créer les images et les boutons radios du carrousel
    let index = 0;
    for (const elm of galerie__img) {
        elm.dataset.index = index;
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        elm.addEventListener("mousedown", function (e) {
            indexCourant = e.target.dataset.index;
            carrousel.classList.add("carrousel--ouvrir");
            changeImage(indexCourant);
        })
        index++;
    }

    /**
     * Créer une image du carrousel à partir d'une image de la galerie
     * @param {*} index numéro de l'image
     * @param {*} elm image de la galerie
     */
    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement("img");
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.dataset.index = index;
        carrousel__img.src = elm.src;
        if (index !== 0) {
            carrousel__img.style.opacity = 0;
        }
        carrousel__figure.appendChild(carrousel__img);
    }

    /**
     * Créer les boutons radios dans le carrousel
     * @param {*} index numéro radio bouton
     */
    function creer_radio_carrousel(index) {
        // Créer nouvel input
        let carrousel__radio = document.createElement("input");
        // Modifier le type = radio
        carrousel__radio.type = 'radio';
        // Name
        carrousel__radio.name = 'btn__radio';
        // Dataset index
        carrousel__radio.dataset.index = index;
        // Ajouter le radiocarrousel au formulaire
        carrousel__form.appendChild(carrousel__radio);
        // Écouteur événement 'change'
        carrousel__radio.addEventListener("change", function (e) {
            for (const elm of carrousel__figure.children) {
                elm.style.opacity = 0;
            }
            carrousel__figure.children[e.target.dataset.index].style.opacity = 1;
        });

    }


    function ReculerImage() {
        indexCourant--;
        if (indexCourant < 0) {
            indexCourant = totalImages - 1;
        }
        ChangerImageCarrousel();
    }

    function AvancerImage() {
        indexCourant++;
        if (indexCourant >= totalImages) {
            indexCourant = 0;
        }
        ChangerImageCarrousel();
    }

    function ChangerImageCarrousel() {
        changeImage(indexCourant);
        carrousel__form.querySelector(`input[data-index="${indexCourant}"]`).checked = true;
    }

    function changeImage(nouvelIndex) {
        for (const elm of carrousel__figure.children) {
            elm.style.opacity = 0;
        }
        carrousel__figure.children[nouvelIndex].style.opacity = 1;
        indexCourant = nouvelIndex;
    }

})();