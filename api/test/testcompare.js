const assert = require('chai').expect;

let a = ([1, 2, 3]);
let b = ([3, 2, 1]);

describe(`Testing API get Calender holiday`, () => {
    it(`@test `, async () => {
        let testing = assert(a).to.have.members(b);
    })
})