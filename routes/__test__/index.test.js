const app = require('../../app');
const request = require('supertest');

describe('register', () => {
  it('returns bad request if first name is missing', async () => {
    const res = await request(app).post('/register').send({ firstName: 'Sasha' });

    expect(res.statusCode).toEqual(401);
  });

  it('returns bad request if first name is missing', async () => {
    const res = await request(app)
      .post('/register')
      .send({ somethingElse: 'Sasha' });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual('you need to pass a firstName');
  });
});
