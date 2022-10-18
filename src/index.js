import React from "react";
import ReactDOM from "react-dom/client";
import OrderTable from "./components/OrderTable";
import NavBar from "./components/NavBar";
import MenuManage from "./components/MenuManage";
import InsertForm from "./components/InsertForm";
import UpdateForm from "./components/UpdateForm";
import LoginForm from "./components/LoginForm";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const getLoginStatus = () => {
  return true;
};
const token = getLoginStatus();

const root = ReactDOM.createRoot(document.getElementById("root"));

//component={token ? Dashboard : Login}

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/orderlist"
          element={token ? <OrderTable /> : <LoginForm />}
        ></Route>
        <Route
          path="/menulist"
          element={token ? <MenuManage /> : <LoginForm />}
        ></Route>
        <Route
          path="/menuform"
          element={token ? <InsertForm /> : <LoginForm />}
        ></Route>
        <Route
          path="/updateform"
          element={token ? <UpdateForm /> : <LoginForm />}
        ></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
