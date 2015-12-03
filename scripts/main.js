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
	},
	game: function() {
		$('nav').show();
		$('section').hide();
		$('#banner').show();
		$('#game').show();
	},
	tumblr: function() {
		$('nav').show();
		$('section').hide();
		$('#banner').show();
		$('#tumblr').show();
	},
	chatroom: function() {
		$('nav').show();
		$('section').hide();
		$('#banner').show();
		$('#chatroom').show();
	}
})

var r = new Router();
Backbone.history.start();