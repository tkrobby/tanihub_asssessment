const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.CALENDER_API);

const getCalenderHoliday = (data) => api.get('')
    .query(data)

module.exports = {
    getCalenderHoliday,
}