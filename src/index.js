import React from "react";
import ReactDOM from "react-dom/client";
import OrderTable from "./components/OrderTable";
import NavBar from "./components/NavBar";
import MenuManage from "./components/MenuManage";
import InsertForm from "./components/InsertForm";
import UpdateForm from "./components/UpdateForm";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/orderlist" element={<OrderTable />}></Route>
        <Route path="/menulist" element={<MenuManage />}></Route>
        <Route path="/menuform" element={<InsertForm />}></Route>
        <Route path="/updateform" element={<UpdateForm />}></Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
