const BromaController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/bromas/", BromaController.findAllBromas);
  app.get("/api/bromas/:id", BromaController.findOneSingleBroma);
  app.put("/api/bromas/update/:id", BromaController.updateExistingBroma);
  app.post("/api/bromas/new", BromaController.createNewBroma);
  app.delete("/api/bromas/delete/:id", BromaController.deleteAnExistingBroma);
};