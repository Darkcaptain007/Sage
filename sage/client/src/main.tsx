import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import Choose from "./pages/Choose.tsx";
import Mentor from "./pages/Mentor.tsx";
import Mentee from "./pages/Mentee.tsx";
import MentorProfilePage from "./pages/MentorProfile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Welcome />} />
      <Route path="role" element={<Choose />} />
      <Route path="mentor" element={<Mentor />} />
      <Route path="mentee" element={<Mentee />} />
      <Route path="mentorProfile" element={<MentorProfilePage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-zlpom46lufjm4flg.us.auth0.com"
    clientId="ekwugadH4V5ebHBIBHTaZAQffhySD9Mx"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/role",
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
