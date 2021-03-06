<?php

define('THEME_DIR_PATH', get_template_directory());
define('THEME_DIR_URI', get_template_directory_uri());

// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-wp-js',
        THEME_DIR_URI . '/dist/scripts/index.min.bundle.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.min.bundle.js' ),
		true
	);

	wp_enqueue_style(
		'vuejs-wp-css',
        THEME_DIR_URI . '/dist/main.min.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/main.min.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );
