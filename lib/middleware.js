const http = require('http');

module.exports = async function (req, res, next) {
	const routesParams = req.query;
	const routes = Object.keys(routesParams);

	res.setHeader('Content-Type', 'application/json');
	res.write('{');

	for (const route of routes) {
		await new Promise((resolve, reject) => {
			const [hostname, port] = req.headers.host.split(':');
			const path = `/${routesParams[route]}`;

			http.get({ hostname, port, path }, (response) => {
				res.write(`"${route}":`);
				response.on('data', chunk => res.write(chunk));
				response.on('error', err => reject(err));
				response.on('end', () => {
					const isLastElem = route === routes[routes.length - 1];
					if (!isLastElem) {
						res.write(',');
					} else {
						res.write('}');
						res.end();
					}
					resolve();
				});
			});
		}).catch(() => {
			throw new Error('Somethink wrong with routes. Please, try again');
		});
	}
	return next();
};
