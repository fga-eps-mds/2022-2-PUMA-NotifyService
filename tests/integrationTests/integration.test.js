const axios = require('axios');
const request = require('supertest');
const app = require('../utils/testapp');
const environment = require('../../src/config/environment.config');


environment.configEnv();

describe('Initial page', () => {
    it('Should get initial page', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});
