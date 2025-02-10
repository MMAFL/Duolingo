import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing/LandingPage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import LearnPage from "./pages/protected/LearnPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AuthRoute from "./components/AuthRoute.tsx";
import LessonPage from "./pages/protected/LessonPage.tsx";
import ShopPage from "./pages/protected/Shop.tsx";
import Leaderboard from "./pages/protected/Leaderboard.tsx";
import { Settings } from "./pages/protected/Settings.tsx";
import { ErrorPage } from "./pages/landing/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/learn",
        element: <LearnPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/lesson/:id",
    element: <LessonPage />,
  },
  { path: "*", element: <ErrorPage /> },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
