import React from "react";
import { Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";

export default function PublicComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
