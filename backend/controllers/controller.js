const Manager = require("../managers/manager");

const saveCustomer = function (request, response) {
  Manager.saveCustomer(request.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getCustomersList = function (request, response) {
  Manager.getCustomersList()
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getCustomer = function (request, response) {
  Manager.getCustomer(request.params)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const saveItem = function (request, response) {
  Manager.saveItem(request.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getItemsList = function (request, response) {
  Manager.getItemsList()
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getItem = function (request, response) {
  Manager.getItem(request.params)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const generateInvoice = function (request, response) {
  Manager.generateInvoice(request.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getInvoice = function (request, response) {
  Manager.getInvoice(request.params)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};
const getInvoiceList = function (request, response) {
  Manager.getInvoiceList()
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(500).send(error.message));
};

module.exports = {
  saveCustomer,
  getCustomersList,
  getCustomer,
  saveItem,
  getItemsList,
  getItem,
  generateInvoice,
  getInvoice,
  getInvoiceList,
};
