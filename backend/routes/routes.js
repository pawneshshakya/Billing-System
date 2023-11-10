const routes = require("express").Router();

const Controller = require("../controllers/controller");

routes.post("/saveCustomer", Controller.saveCustomer);
routes.get("/getCustomersList", Controller.getCustomersList);
routes.get("/getCustomer/:id", Controller.getCustomer);
routes.post("/saveItem", Controller.saveItem);
routes.get("/getItemsList", Controller.getItemsList);
routes.get("/getItem/:id", Controller.getItem);
routes.post("/generateInvoice", Controller.generateInvoice);
routes.get("/getInvoice/:id", Controller.getInvoice);
routes.get("/getInvoiceList", Controller.getInvoiceList);

module.exports = routes;
