const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.DEV_URL);

const loginApps = (data) => api.post('/v1/account/auth/login')
    .set('Content-Type', 'application/json')
    .send(data)

module.exports = {
    loginApps,
}