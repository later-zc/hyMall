"use strict";
const service_index = require("./index.js");
const getHomeMutidata = () => {
  return service_index.hyRequest.get("/home/multidata", {});
};
exports.getHomeMutidata = getHomeMutidata;
