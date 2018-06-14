const config = require('config');
const { expect } = require('chai');
const express = require('express');

const mocks = require('./mocks');
const request = require('./utils/request');
const middleware = require('../index');

const API_RESOURCES = '/api/resources';

describe('GetThemAll middleware test', () => {
	before(() => {
		const app = express();
		app.listen(config.url.port);
		app.get(API_RESOURCES, middleware);
		mocks(app);
	});

	it('should successfully stream, when one resource', async () => {
		const responce = await request(
			'GET',
			`${config.url.origin}${API_RESOURCES}?users=api/users`
		);
		expect(responce.statusCode).to.equal(200);
		expect(responce.body).to.be.a('object');
		expect(responce.body).to.have.property('users')
			.with.lengthOf(100000);
	});

	it('should successfully sequentially stream, when couple resources', async () => {
		const responce = await request(
			'GET',
			`${config.url.origin}${API_RESOURCES}?user=api/users/1&customers=api/customers&countries=api/countries`
		);
		expect(responce.statusCode).to.equal(200);
		expect(responce.body).to.be.a('object');
		expect(responce.body)
			.to.have.property('user')
			.with.to.be.a('object')
			.with.to.have.property('id')
			.to.equal(1);
		expect(responce.body).to.have.property('customers')
			.with.to.be.a('array')
			.with.lengthOf(100000);
		expect(responce.body).to.have.property('countries')
			.with.to.be.a('array')
			.with.lengthOf(100000);
	});
});
