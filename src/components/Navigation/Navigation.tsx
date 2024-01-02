import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "@constants/navigation";
import MainPage from "@components/pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Navigate replace to={AppRoutes.Main} />}
          Component={MainPage}
        />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
