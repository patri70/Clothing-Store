import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Layout() {
  return (
    <div className="size-full">
      <Navigation />
      <Outlet />
    </div>
  );
}
