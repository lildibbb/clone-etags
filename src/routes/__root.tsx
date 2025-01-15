import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
