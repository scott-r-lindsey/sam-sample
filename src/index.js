'use strict';

exports.handler = async () => {
  const test = false;
  if (true == test) {
    console.log('cats and dogs, living together');
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        foo: "bar",
        message: 'Hello world!',
        details: 'The sample code executed correctly',
        environment: process.env.environment,
      },
      null,
      2
    ),
  };
};
