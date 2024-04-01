import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
export default function PrivateComponent() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  //   const [value, setFunctionValue] = useState(isAuthenticated);

  //if berhasil melakukan perubahan
  //   localStorage.setItem("isAuthenticated", "false");

  //   const isAuthenticated = "false"; // Contoh: pengguna dianggap terautentikasi
  //   const isAuthenticatedBool = Boolean(isAuthenticated);
  //   console.log(isAuthenticatedBool);

  // If the user is authenticated, redirect to the dashboard
  if (isAuthenticated == "false") {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render nested routes
}
