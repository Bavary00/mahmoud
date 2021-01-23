/*global $, window, WOW*/

$(function () {

    "use strict";

    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        progressCheck = false,
		factsCheck = false;

    /*========== Loading  ==========*/
    $('.preloader').delay(200).fadeOut(700, function () {
        $(this).remove();
    });

	/*========== Color Switcher  ==========*/
    $(".switch-button").on("click", function () {
        $(this).addClass("hide");
        $(".switched-styles").addClass("show");
    });

    $(".switched-styles .hide-button").on("click", function () {
        $(this).parent().removeClass("show");
        $(".switch-button").removeClass("hide");
    });

    $(".switched-styles ul li").on("click", function () {
        $("link[href*='color']").attr("href", "css/colors/" + $(this).data('color') + "_color.css");
    });

    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {

        if (win.scrollTop() > 100) {
            navBar.addClass("active-nav fadeInDown animated");
        } else {
            navBar.removeClass("active-nav fadeInDown animated");
        }

    }

    activeNavbar();

    win.on("scroll", function () {
        activeNavbar();
    });

    /*========== Mobile Menu  ==========*/
    $(".navbar .menu-toggle").on("click", function () {
        navBar.toggleClass("menu-active");
    });

    /*========== Start Scroll For Link To Go Section  ==========*/
    $(".navbar .contact, .home .contact, .home .scroll-down").on("click", function (e) {
        e.preventDefault();
        var selector = $(this);
        htmlBody.animate({
            scrollTop: $(selector.attr("href")).offset().top - 70
        }, 800);
    });

    /*========== Smooth Scroll  ==========*/
    $(".navbar .navbar-nav > li > .nav-link").on("click", function (e) {
        e.preventDefault();
		var selector = $(this);
		htmlBody.animate({
			scrollTop: $(selector.attr('href')).offset().top - 70
		}, 600);
    });

    $('.subtitle.subtitle-typed').each(function(){var subtitleContainer=$(this);subtitleContainer.typed({stringsElement:subtitleContainer.find('.typing-title'),backDelay:3500,typeSpeed:0,loop:true});});
    /*========== Add Class Active to Menu Links on Scrolling  ==========*/
    win.on("scroll", function () {
        $("section").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 71) {
                $(".navbar .navbar-nav > li > .nav-link[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
    });

	win.on("scroll", function () {
        $("section").each(function () {
            if (win.scrollTop() >= $(this).offset().top - 250) {
				$("#" + $(this).attr("id") + " .number").addClass("show");
            }
        });
    });

	/*========== Skills Progress ==========*/
	function skillsPogress() {
        $(".progress-container").each(function () {
            var progressBar = $(this).find(".progress-bar");
            progressBar.css("width", progressBar.attr("aria-valuenow") + "%");
        });
    }

    if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
        skillsPogress();
        progressCheck = true;
    }

    win.on("scroll", function () {

        if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
            skillsPogress();
            progressCheck = true;
        }

    });

	/*========== Facts Counter  ==========*/
    if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
        $(".facts .fact-number").countTo();
        factsCheck = true;
    }

    win.on("scroll", function () {
        if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
            $(".facts .fact-number").countTo();
            factsCheck = true;
        }
    });

    /*========== Start Portfolio Trigger Filterizr Js  ==========*/
    $("#control li").on('click', function () {
        $(this).addClass('active').siblings("li").removeClass('active');
    });
    // The Filterizr
    $('#filtr-container').filterizr({
        animationDuration: 0.4
    });

    /*========== Start Magnigic Popup Js ==========*/
    if ($('.portfolio-content .item')[0]) {

        $('.portfolio-content .item').magnificPopup({
            delegate: '.icon-img',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    /*========== Owl Carousel Js Testimonial  ==========*/
    $(".testimonials .owl-carousel").owlCarousel({
        items: 1,
		nav: true,
		dots: false,
        autoplay: false,
        smartSpeed: 500,
        margin: 10,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true
    });

    /*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }

    scrollUp();

    win.on("scroll", function () {
        scrollUp();
    });

    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });

    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();

});
