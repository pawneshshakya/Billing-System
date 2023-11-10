import Billing from "./components/Billing";
import BillingDetails from "./components/BillingDetails";
import CustomerForm from "./components/CustomerForm";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import ItemForm from "./components/ItemForm";
import Items from "./components/Items";
import Master from "./components/Master";

export const routes = [
  {
    path: "/",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/master",
    name: "Master",
    element: <Master />,
  },
  {
    path: "/billing",
    name: "Billing",
    element: <Billing />,
  },
  {
    path: "/billingDetails/:id",
    name: "Billing",
    element: <BillingDetails />,
  },
  {
    path: "/customers",
    name: "Customers",
    element: <Customers />,
  },
  {
    path: "/items",
    name: "Items",
    element: <Items />,
  },
  {
    path: "/addCustomer",
    name: "Add New Customer",
    element: <CustomerForm />,
  },
  {
    path: "/editCustomer/:id",
    name: "Update Customer Details",
    element: <CustomerForm />,
  },
  {
    path: "/addItems",
    name: "Add New Item",
    element: <ItemForm />,
  },
  {
    path: "/editItem/:id",
    name: "Update Item Details",
    element: <ItemForm />,
  },
];
