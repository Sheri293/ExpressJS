var getHealthStatus = function getHealthStatus(req, res) {
  res.json({
    message: "API IS WORKING GOOD"
  });
};
export default {
  getHealthStatus: getHealthStatus
};