const dbConnect = require("../../api/db");
const Car = require("../../api/models/car.model");
const middleware = require('./../../api/middleware/index')


const { standardAPIHeaders: headers, getIDFromURL } = require("./../../api/utils/index");

const handler = async (event, context) => {
  if(event.httpMethod.toUpperCase() !== 'DELETE') {
    return {
      statusCode: 404,
      body: 'Wrong Method'
    }
  }
  middleware.use(event);
  const id = getIDFromURL(event.path);
  try {
    await dbConnect();
    const result = await Car.deleteOne({ _id: id });
    if (result.n === 0) {
      return {
        statusCode: 404,
      };
    }
    return {
      statusCode: 204,
      // headers,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers,
    };
  }
};

module.exports = { handler };
