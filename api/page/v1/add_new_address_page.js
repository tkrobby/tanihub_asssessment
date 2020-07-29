const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const addNewAddress = (data, token) => api.post('/v1/account/address/me')
    .set('Content-Type', 'application/json')
    .set('Authorization', token)
    .send(data)

module.exports = {
    addNewAddress,
}