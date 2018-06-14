const promiseRequest = require('request-promise');

const METHODS = {
	get: 'GET',
	post: 'POST',
	put: 'PUT',
	delete: 'DELETE'
};

module.exports = async function (method, uri, body) {
	if (!Object.values(METHODS).includes(method)) {
		throw new Error('Not valid HTTP method');
	}
	const options = {
		uri,
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		json: true,
		resolveWithFullResponse: true
	};
	if (body) {
		options.json = body;
	}
	return await promiseRequest(options);
};
