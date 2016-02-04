'use strict';
var Backbone = require('backbone');
var $ = require('jquery');


$(document).ready(function(){
	var Router = Backbone.Router.extend({
		routes: {
			'' : 'home',
			'game' : 'game',
			'socialNetwork' : 'socialNetwork',
			'chatroom' : 'chatroom',
			'ironQuiz' : 'ironQuiz'
		},
		home: function() {
			$('nav').show();
			$('section').hide();
			$('#banner').show();
			$('#main').show();
			if(!($('.dropBox').css('display', 'none'))) {
				$('.dropBox').toggle('slow');
			}
		},
		game: function() {
			$('nav').show();
			$('section').hide();
			$('#bannerGame').show();
			$('#game').show();
			if(!($('.dropBox').css('display', 'none'))) {
				$('.dropBox').toggle('slow');
			}
		},
		socialNetwork: function() {
			$('nav').show();
			$('section').hide();
			$('#bannerTumblr').show();
			$('#tumblr').show();
			if(!($('.dropBox').css('display', 'none'))) {
				$('.dropBox').toggle('slow');
			}
		},
		chatroom: function() {
			$('nav').show();
			$('section').hide();
			$('#bannerChatroom').show();
			$('#chatroom').show();
			if(!($('.dropBox').css('display', 'none'))) {
				$('.dropBox').toggle('slow');
			}
		},
		ironQuiz: function() {
			$('nav').show();
			$('section').hide();
			$('#bannerQuiz').show();
			$('#ironQuiz').show();
			if(!($('.dropBox').css('display', 'none'))) {
				$('.dropBox').toggle('slow');
			}
		}
	})

	var r = new Router();
	Backbone.history.start();

	var $hamburger = $('.hamburger');

	$hamburger.click(function(e) {
		e.preventDefault();
		$('.dropBox').toggle('slow');
	})

	$('#banner').click(function(e) {
		e.preventDefault();
		$('.dropBox').hide('slow');
	})

	// function fadeCarousel() {
	// 	var $active = $('.active');
	//     var $next = ($active.next().length > 0) ? $active.next() : $('#bannerGame .carousel img:first');    
	    
	//     $('.carousel img').fadeOut(500);
	//     $active.fadeIn(500);
	//     $next.addClass('active');
	    

	//     $active.removeClass('active');

	    
	    
	// }

	// setInterval(fadeCarousel, 3000);

	var t = setInterval(function(){
		$(".carousel .carouselList").animate({marginLeft:-320}, 1000, function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);

	$('.arrow-left').click(function() {
		// console.log('clicky');
		$(".carousel .carouselList").animate({marginLeft:-320}, 1000, function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	})

	$('.arrow-right').click(function() {
		// console.log('clicky');
		$(".carousel .carouselList").find("li").before($(".carousel .carouselList").find("li:first"));
		$(".carousel .carouselList").animate({marginLeft:320}, 1000, function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	})
});