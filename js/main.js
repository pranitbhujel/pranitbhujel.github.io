
// Quotes Section 
var quote = document.getElementsByClassName('quote');
var author = document.getElementsByClassName('quote-author');

for (i = 0; i < quote.length; i++) {
	quote_new = ` <div class="w3-panel w3-light-grey w3-margin-top">
                      <span style="font-size:120px;line-height:0.6em;opacity:0.2">❝</span>
                      <p class="w3-large" style="text-align: center; margin-top: -25px">` + quote[i].innerHTML + `</p>
                      <p style="text-align: right;font-size:14px;">` + author[i].innerHTML + ` </p>
                    </div>
                  `;

	quote[i].innerHTML = quote_new;
	author[i].innerHTML = "";
}

var dark = 0
function darkmode() {
	if ((dark += 1)%2 !=0){
		var inabout = document.getElementById('innerabout');
		var about = document.getElementById('about');
		var projects = document.getElementById('projects');
		var blogs = document.getElementById('blogs');
		about.classList.add("dark-mode");
		inabout.classList.add("dark-mode");
		blogs.classList.add("ghostblog");
		inabout.classList.add("dark-mode");
	}

}

(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	// /*--/ Star Counter /--*/
	// $('.counter').counterUp({
	// 	delay: 15,
	// 	time: 2000
	// });

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	// $('body').scrollspy({
	// 	target: '#mainNav',
	// 	offset: navHeight
	// });
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

jQuery(document).ready(function ($) {

	'use strict';

	var top_header = $('.parallax-content');
	top_header.css({ 'background-position': 'center center' }); // better use CSS

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
	});


	$('body').scrollspy({
		target: '.fixed-side-navbar',
		offset: 200
	});

	// smoothscroll on sidenav click

	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a').click(function (e) {
		e.preventDefault();
		var $this = $(this),
			tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();

	})

	var owl = $("#owl-testimonials");

	owl.owlCarousel({

		pagination: true,
		paginationNumbers: false,
		autoPlay: 6000, //Set AutoPlay to 3 seconds
		items: 3, //10 items above 1000px browser width
		itemsDesktop: [1000, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 2], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

	});


});
