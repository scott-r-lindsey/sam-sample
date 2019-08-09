'use strict';

const {handler} = require('../src/index');
const {eventStub} = require('./stubs/eventHttpApiGateway.json');

describe('Sample Code Test', () => {

  beforeAll(() => {
    // we can do some setup here
    process.env.environment = 'local';
  });

  afterEach(() => {
    // cleanup
  });

  test('Returns JSON with expected values', () => {
    const event = eventStub;
    const context = {};

    expect.assertions(1);

    const expectedBody = JSON.stringify({
      foo: "bar",
      message: 'Hello world!',
      details: 'The sample code executed correctly',
      environment: 'local',
    }, null, 2);


    return handler(event, context).then(data =>
      expect(data).toEqual({
         "body": expectedBody,
         "statusCode": 200,
      })
    );
  });

});
