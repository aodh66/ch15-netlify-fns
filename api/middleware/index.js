const parseJSON = require("./parse-json");
module.exports = {
  wares: [parseJSON],
  use(event){
    for(const fn of this.wares) {
      fn(event)
    }
  }
}