<?php


/* タイトル読み込み */
add_theme_support('title-tag');

/* CSSの読み込み */
if (!function_exists('my_load_files')) {
	function my_load_files()
	{
		$my_theme = wp_get_theme();
		$my_theme_ver = $my_theme->Version;
		wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), $my_theme_ver);
	}
}
add_action('wp_enqueue_scripts', 'my_load_files');


/*
cdnからjquery読み込むため、
wordpress同梱jquery読み込み中止
*/
function load_script()
{
	if (!is_admin()) {
		/* jQueryを登録解除 */
		wp_deregister_script('jquery');

		/* footerに読み込ませるcdn */
		wp_enqueue_script('cdn-jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);

		/* リセットcss */
		wp_enqueue_style('reset-css', 'http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css', array(), '3.18.1');

		/* font-awesome読み込み */
		wp_enqueue_style('fontawesome-min-css', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0');

		/* main.js 読み込み */
		wp_enqueue_script(
			'main-script',
			get_template_directory_uri() . '/js/main.js',
			array('cdn-jquery')
		);
	}u\
}
add_action('init', 'load_script');
