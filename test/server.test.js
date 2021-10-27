const { assert } = require('console');
const request = require('supertest');
let app = require('../server');

describe('GET /iecho?text=test', function() {
  it('responds with json and success', function(done) {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response =>{
        assert(response.body.text,"test");
        done();
      })
      .catch(err => done(err));
  });

  it('responds with json and error invalid params', function(done) {
    request(app)
      .get('/iecho?userName=pablo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(response =>{
        assert(response.body.error,"no text");
        done();
      })
      .catch(err => done(err));
  });
});