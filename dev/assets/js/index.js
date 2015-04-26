/**
 * Main JS file for CyberToro behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
    	var body = $('body');
        
    	// disabled linkun-fire
    	var disabled = $('.disabled');
    	disabled.on('click', function (e) {
    		e.preventDefault();
    	});

    	// menu
    	var trigger = $('.menu-trigger, .overlay');
    	trigger.on('click', function(e) {
    		e.preventDefault();
    		body.toggleClass('menu-active');
    	});

    });

}(jQuery));