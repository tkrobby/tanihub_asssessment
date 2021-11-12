const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const pageServiceVehicles = require('../../page/tanihub/vehicles_page.js')
const code = require('../../helper/reponse_code_message.json')
const schema = require('../../schema/vehicles_shema.json')

//ExpectedResultBodyResponse
var ExpectedId = ['4e09b023-f650-4747-9ab9-eacf14540cfb','d8f893b5-1dd9-41a1-9918-0099c1aa2de8','923d70c9-8f15-4972-ad53-0128b261d628']
var ExpectedName = ["Air Destroyer Goliath","Red Wing","Sosuke's Boat"]
var ExpectedDescription = ["A military airship utilized by the government to access Laputa","An experimental aircraft captured by Porco. Named Savoia S.21","A toy boat where Sosuke plays"]
var ExpectedVehicleClass = ["Airship","Airplane","Boat"]
var ExpectedLength = ["1,000","20","10"]
var ExpectedPilot = ["https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583","https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3","https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607"]
var ExpectedFilms = ["https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe","https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8","https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786"]
var ExpectedURL = ["https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb","https://ghibliapi.herokuapp.com/vehicles/d8f893b5-1dd9-41a1-9918-0099c1aa2de8","https://ghibliapi.herokuapp.com/vehicles/923d70c9-8f15-4972-ad53-0128b261d628"]

const testCase = {
        'positive' : {
            'ShowVehicles' : 'As a user I want to Show detail Vehicles',
        }
};

describe('Api Vehicles | /vehicles/', () => {
    

    describe('Test case API Vehicles', () => {
        
        it(`@post @ShowUserName${testCase.positive.ShowVehicles}`, async() => {
            const response = await pageServiceVehicles.ServiceVehicles();
            // console.log(response.body)
                assert(response.status).to.equal(code.successOk);
                assert([response.body[0].id,response.body[1].id,response.body[2].id]).to.have.members(ExpectedId);
                assert([response.body[0].name,response.body[1].name,response.body[2].name]).to.have.members(ExpectedName);
                assert([response.body[0].description,response.body[1].description,response.body[2].description]).to.have.members(ExpectedDescription);
                assert([response.body[0].vehicle_class,response.body[1].vehicle_class,response.body[2].vehicle_class]).to.have.members(ExpectedVehicleClass);
                assert([response.body[0].length,response.body[1].length,response.body[2].length]).to.have.members(ExpectedLength);
                assert([response.body[0].pilot,response.body[1].pilot,response.body[2].pilot]).to.have.members(ExpectedPilot);
                assert([response.body[0].films[0],response.body[1].films[0],response.body[2].films[0]]).to.have.members(ExpectedFilms);
                assert([response.body[0].url,response.body[1].url,response.body[2].url]).to.have.members(ExpectedURL);
                assert(response.body).to.be.jsonSchema(schema);
        });
    });
});