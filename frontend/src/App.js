import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { routes } from "./constant";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        {routes.map((route, i) => {
          return <Route path={route.path} element={route.element} key={i} />;
        })}
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master" element={<Master />} />
        <Route path="/billing" element={<Billing />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
