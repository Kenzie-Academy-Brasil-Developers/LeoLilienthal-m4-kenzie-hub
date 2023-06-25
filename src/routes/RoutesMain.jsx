import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";
import { TechsProvider } from "../providers/TechsContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/HomePage" element={<TechsProvider><HomePage /></TechsProvider>}/>
        </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  );
};
