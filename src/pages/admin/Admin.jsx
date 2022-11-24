import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Contact from "./Contact";
import Customer from "./Customer";
import Dashboard from "./Dashboard";

import Product from "./Product";
import Clek from "./Clek";

const Admin = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<Dashboard />} /> 
        <Route path="contacts" element={<Contact/>} />
        <Route
          path="customers/*"
          element={<Customer  />}
        />
         <Route
          path="product/*"
          element={<Product  />}
        />
         <Route
          path="clek/*"
          element={<Clek />}
        />
        {/* <Route path="settings" element={<Blank />} />
        <Route path="stats" element={<Blank />} /> */}
      </Route>
    </Routes>
  );
};

export default Admin;
