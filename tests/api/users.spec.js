const request = require('supertest');

const app = require('../../app');

describe('Api Users', () => {

    describe('GET/api/users', () => {

        it('deberia responder con status 200', async () => {

            const response = await request(app).get('/api/users').send();
            expect(response.statusCode).toBe(200);
        })

    })

})