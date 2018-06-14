const generator = require('./utils/generator');

module.exports = function (app) {
	app.get(
		'/api/users',
		(req, res) => res
			.status(200)
			.json(generator(10))
	);

	app.get(
		'/api/users/1',
		(req, res) => res
			.status(200)
			.json(generator(1))
	);

	app.get(
		'/api/customers',
		(req, res) => res
			.status(200)
			.json(generator(10))
	);

	app.get(
		'/api/countries',
		(req, res) => res
			.status(200)
			.json(generator(10))
	);
};
