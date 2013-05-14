define(['jquery', 'config'], function ($, config) {
	"use strict";

	require.config({
		'paths': {
			'application': 'js/application'
		}
	});

	require(['application'], function (app) {
		console.log(app);
	})
});
