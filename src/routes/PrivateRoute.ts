import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    const role = localStorage.getItem("userRole");
    if (!token || !role || token === "undefined") {
      setIsLoggedIn(false);
      navigate(`/${location.search}`, { replace: true });
    } else {
      setIsLoggedIn(true);
    }
  }, [location.search, navigate]);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
