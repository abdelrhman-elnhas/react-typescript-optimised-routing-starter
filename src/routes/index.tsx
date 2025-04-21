import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorHandler from "../components/errors/ErrorHandler";
import RootLayout from "../pages/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import HomePage from "../pages";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import LearnLayout from "../pages/learn/Layout";
import Installation from "../pages/learn/Installation";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import QuickStartPage from "../pages/learn";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = false;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/">
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/learn"
        element={<LearnLayout />}
        errorElement={<ErrorHandler />}
      >
        <Route index element={<QuickStartPage />} />
        <Route path="installation" element={<Installation />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
