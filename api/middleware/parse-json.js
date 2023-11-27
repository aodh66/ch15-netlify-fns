// const parseJSON = (event) => JSON.parse(event.body);
module.exports = (event /*, context */) => {
  if(!event.body) return;
  event.body = JSON.parse(event.body);
}
