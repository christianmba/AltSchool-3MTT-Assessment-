const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('User Authentication', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({ firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123' });
    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal('User created successfully');
    expect(res.body.user).to.have.property('_id');
    // Add more assertions as needed
  });

  it('should login an existing user', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'john@example.com', password: 'password123' });
    expect(res.status).to.equal(200);
    expect(res.body.accessToken).to.be.a('string');
  });
});