const getIDFromURL = (url = "") => url.split("/").at(-1);
exports.getIDFromURL = getIDFromURL;

const standardAPIHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

exports.standardAPIHeaders = standardAPIHeaders;