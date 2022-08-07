import React from "react";
import { Route, Outlet, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRouter() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo ? <Outlet /> : <Link to="/login" />;
}

export default PrivateRouter;
