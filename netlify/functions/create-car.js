const dbConnect = require("../../api/db");
const Car = require("../../api/models/car.model");
const middleware = require('./../../api/middleware/index')

const { standardAPIHeaders: headers } = require("./../../api/utils/index");

const handler = async (event, context) => {
  if(event.httpMethod.toUpperCase() !== 'POST') {
    return {
      statusCode: 404,
      body: 'Wrong Method'
    }
  }
  middleware.use(event);
  const carData = event.body;
  console.log("carData", carData);
  if (carData.avatar_url === "") {
    delete carData.avatar_url;
  }
  console.log(carData);
  try {
    await dbConnect();
    const newCar = new Car(carData);
    const result = await newCar.save();
    return {
      statusCode: 201,
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
