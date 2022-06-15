import React from "react";
import { routes } from "./navigation";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(
        (item: { path: string; component: React.ReactNode }, index: number) => {
          return (
            <Route
              key={item.path + index}
              path={item.path}
              element={item.component}
            />
          );
        }
      )}
    </Routes>
  );
};
