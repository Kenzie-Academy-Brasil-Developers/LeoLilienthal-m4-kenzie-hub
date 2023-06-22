import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};
