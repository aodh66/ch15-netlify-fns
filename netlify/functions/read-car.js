const dbConnect = require("../../api/db");
const Car = require("../../api/models/car.model");
const {
  standardAPIHeaders: headers,
  getIDFromURL,
} = require("./../../api/utils/index");
const middleware = require('./../../api/middleware/index')


const handler = async (event, context) => {
  if(event.httpMethod.toUpperCase() !== 'GET') {
    return {
      statusCode: 404,
      body: 'Wrong Method'
    }
  }
  middleware.use(event);
  const id = getIDFromURL(event.path);

  try {
    await dbConnect();
    const cars = await Car.findById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(cars),
      headers,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers,
    };
  }
};

module.exports = { handler };
