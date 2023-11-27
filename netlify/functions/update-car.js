const dbConnect = require("../../api/db");
const Car = require("../../api/models/car.model");

const {
  standardAPIHeaders: headers,
  getIDFromURL,
} = require("./../../api/utils/index");
const middleware = require("./../../api/middleware/index");

const handler = async (event, context) => {
  if(event.httpMethod.toUpperCase() !== 'PUT') {
    return {
      statusCode: 404,
      body: 'Wrong Method'
    }
  }
  middleware.use(event);
  const id = getIDFromURL(event.path);
  // const updates = JSON.parse(event.body);
  const updates = event.body;
  console.log("updates", updates);
  try {
    await dbConnect();
    const result = await Car.updateOne({ _id: id }, updates);
    if (result.n === 0) return context.sendStatus(404);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers,
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
