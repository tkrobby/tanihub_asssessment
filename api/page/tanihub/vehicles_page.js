const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const ServiceVehicles = () => api.get('/vehicles/')

module.exports = {
    ServiceVehicles,
}