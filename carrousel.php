<?php

/**
 * Plugin Name: Carrousel
 * Description: Affiche un Carrousel d'images contrôlé par des boutons radio
 * Author: Marguerite Demontigny
 * Version: 1.0.0
 */



function eddym_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true //permet d'ajouter le script à la fin du document
    );
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');

//Pour que ce soit fonctionnel 
//wp_header() juste avant la fermeture du head Dans header .php
//wp_footer()juste avant la balise fermeture body Dans footer.php

function genere_html()
{
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte

    $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
       <div class="carrousel">
       <button class="carrousel__x">X</button>
       <figure class="carrousel__figure"></figure>
       <form class="carrousel__form"></form>
       
       </div>';
    return $contenu;

    return $contenu;
}
add_shortcode('mon_html', 'genere_html');
