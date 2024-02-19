import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../Header/Header";

export default function ProtectedRoute({
  loggedIn,
  element: Component,
  ...props
}) {
  return loggedIn ? (
    <>
      <Header loggedIn={loggedIn} />
      <Component {...props} />
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
}
