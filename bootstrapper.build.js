({
	'baseUrl': 'scripts',

	'include': 'requireLib',

	'name': 'bootstrapper',

	'namespace': 'myApp',

//	'optimize': 'none',

	'out': 'js/bootstrapper.js',

	'paths': {
		'jquery': 'libs/jquery-1.7.2',
		'requireLib': 'require'
	},

	'wrap': {
		'startFile': ['scripts/build-fragments/header.js'],
		'endFile': ['scripts/build-fragments/footer.js']
	}
})
