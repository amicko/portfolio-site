'use strict';
var Backbone = require('backbone');
var $ = require('jquery');

var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'game' : 'game',
		'tumblr' : 'tumblr',
		'chatroom' : 'chatroom'
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
		$('#banner').show();
		$('#game').show();
		if(!($('.dropBox').css('display', 'none'))) {
			$('.dropBox').toggle('slow');
		}
	},
	tumblr: function() {
		$('nav').show();
		$('section').hide();
		$('#banner').show();
		$('#tumblr').show();
		if(!($('.dropBox').css('display', 'none'))) {
			$('.dropBox').toggle('slow');
		}
	},
	chatroom: function() {
		$('nav').show();
		$('section').hide();
		$('#banner').show();
		$('#chatroom').show();
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
	console.log('son of a gun')
})