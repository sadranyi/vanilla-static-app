const faker = require('faker');

module.exports = async function (context, req) {
    context.res = {
        body: {
            code: faker.lorem.word()
        }
    };
};