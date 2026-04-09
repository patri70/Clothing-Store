import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MasterViewPage from "./pages/MasterViewPage";
import StatisticsPage from "./pages/StatisticsPage";
import DetailPage from "./pages/DetailPage";
import PresentationPage from "./pages/PresentationPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PresentationPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "admin", element: <MasterViewPage /> },
      { path: "admin/add", element: <AddProductPage /> },
      { path: "admin/edit/:id", element: <EditProductPage /> },
      { path: "statistics", element: <StatisticsPage /> },
      { path: "product/:id", element: <DetailPage /> },
    ],
  },
]);