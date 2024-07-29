import App from "App";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../Components/Login/Login";

const CustomRoutes = () => {
  const location = useLocation();

  const token = localStorage.getItem("idToken");
  const role = localStorage.getItem("userRole");

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default CustomRoutes;
