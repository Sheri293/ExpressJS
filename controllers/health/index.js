const getHealthStatus = (req, res) => {
  res.json({ message: "API IS WORKING GOOD" });
};

module.exports = {
  getHealthStatus,
};

