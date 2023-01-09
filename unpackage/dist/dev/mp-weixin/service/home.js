"use strict";
const service_index = require("./index.js");
const getHomeMutidata = () => {
  return service_index.hyRequest.get("/home/multidata", {});
};
const getHomeData = (type, page) => {
  return service_index.hyRequest.get("/home/data", {
    type,
    page
  });
};
exports.getHomeData = getHomeData;
exports.getHomeMutidata = getHomeMutidata;
