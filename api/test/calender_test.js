const assert = require('chai').expect;

const page = require('../page/calender_page.js');
const data = require('../data/calender_data.json');
const value = require('../helper/response_calender.json')

const testCase = {
    "positive": {
        "holidayInIndonesa": "As a User, I want know holiday in Indoneisa 2019",
        "holiday2018": "As a User, I want know holiday in Indoneisa 2018"
    },
    "negative": {
        "apiKeyInvalid": "As a User Not Valid, I should calender holiday",
        "inputNumberInCountry": "As a user Make sure system can't input field Country"
    }
}

describe(`Testing API get Calender holiday`, () => {

    describe(`Positif Testing API get Calender holiday`, () => {

        it(`@get ${testCase.positive.holidayInIndonesa}`, async () => {
            const response = await page.getCalenderHoliday(data.datavalid);
            assert(response.status).to.equal(200);
            assert(response.body.response.holidays[0].name).to.equal(value.responseValue.newYear)
            assert(response.body.response.holidays[22].name).to.equal(value.responseValue.Independence)
            assert(response.body.response.holidays[22].date.iso).to.equal('2019-08-17')
        });

        it(`@get ${testCase.positive.holiday2018}`, async () => {
            const response = await page.getCalenderHoliday(data.holiday2018);
            assert(response.status).to.equal(200);
            assert(response.body.response.holidays[0].name).to.equal(value.responseValue.newYear)
            assert(response.body.response.holidays[0].date.iso).to.equal('2018-01-01')
        });

    })

    describe(`Negatif Testing API get Calender holiday`, () => {

        it(`@get ${testCase.negative.apiKeyInvalid}`, async () => {
            const response = await page.getCalenderHoliday(data.invalidKey);
            assert(response.status).to.equal(401);
        });

        it(`@get ${testCase.negative.inputNumberInCountry}`, async () => {
            const response = await page.getCalenderHoliday(data.invalidCountry);
            assert(response.status).to.equal(200);
            assert(response.body.meta.error_type).to.equal("call failed")
        });
    })
}) 