const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const data = require('../data/add_new_address_data.json')
const dataLogin = require('../data/login_data.json')
const pageAddAddress = require('../page/v1/add_new_address_page.js')
const pageLogin = require('../page/v1/login_page')
// const schema = require('../schema/login_schema.json')
const code = require('../helper/reponse_code_message.json')

const testCase = {
        'positive' : {
            'addNewCustomer' : 'As a user I want to add new Customer',
        },
        // 'negative' : {
        //     'loginInvalidUser' : 'As a user I want to make sure invalid user can not login',
        //     'emptyPassword' : 'As a user I want to login using empty password',
        //     'emptyPhoneNumber' : 'As a user I want to login using empty Phone Number'
        // }
};

let customerJWToken = '';

describe('Api add new address | /v1/account/address/me', () => {

    before('@post @login', async () => {
        const response = await pageLogin.loginApps(dataLogin.validLogin);
        assert(response.status).to.equal(code.successOk, response.body);
        customerJWToken = response.body.token
        console.log(customerJWToken)
        
    })

    describe('Login Testcase Positive', () => {
        
        it(`@post @addNewAddress${testCase.positive.addNewCustomer}`, async() => {
        const response = await pageAddAddress.addNewAddress(data.addNewAddres, customerJWToken);
        assert(response.status).to.equal(code.successOk, response.body);
        });

    });

    // describe('Login Testcase Negative', () => {
        
    //     it(`@post ${testCase.negative.loginInvalidUser}`, async() => {
    //     const response = await pageLogin.loginApps(data.invalidUser);
    //     assert(response.status).to.equal(code.unprocessableEntity, response.body);
    //     assert(response.body.message.en).to.equal('Password must be 8 to 72 characters');
    //     assert(response.body.message.id).to.equal('Password harus 8 hingga 72 karakter');
    //     });

    //     it(`@post ${testCase.negative.emptyPassword}`, async() => {
    //     const response = await pageLogin.loginApps(data.emptyPassword);
    //     assert(response.status).to.equal(code.unprocessableEntity, response.body);
    //     assert(response.body.message.en).to.equal('Password cannot be empty');
    //     assert(response.body.message.id).to.equal('Password harus diisi');
    //     });

    //     it(`@post ${testCase.negative.emptyPassword}`, async() => {
    //     const response = await pageLogin.loginApps(data.emptyPhoneNumber);
    //     assert(response.status).to.equal(code.unprocessableEntity, response.body);
    //     assert(response.body.message.en).to.equal('Phone number cannot be empty');
    //     assert(response.body.message.id).to.equal('Nomor handphone harus diisi');
    //     });

    // });
});