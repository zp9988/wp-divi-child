<?php
function my_theme_enqueue_styles() { 
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// Allow SVG uploads

function allow_svgimg_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'allow_svgimg_types');

//  slider
  // Enqueue Swiper.js Library

//not croping image
  function wpc_remove_height_cropping($height) {
    return '9999';
  }
  function wpc_remove_width_cropping($width) {
    return '9999';
  }
  
  add_filter( 'et_pb_blog_image_height', 'wpc_remove_height_cropping' );
  add_filter( 'et_pb_blog_image_width', 'wpc_remove_width_cropping' );