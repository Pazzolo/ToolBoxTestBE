const { assert } = require('console');
const request = require('supertest');
let app = require('../server');

describe('GET /iecho?text=test', function() {
  it('responds with json and success and correct text manipulation', function(done) {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        "palindrome": false,
        "text": "tset"
      },done)
  });

  it('responds with json and error invalid params', function(done) {
    request(app)
      .get('/iecho?userName=pablo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {
        "error": "no text"
      },done)
  });
});