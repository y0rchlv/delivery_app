import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ user }) => {
  return !user ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PublicRoute;
