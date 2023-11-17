import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoutesFromElements, Route } from "react-router-dom";
import NotFound from "./routes/notFound.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import RootPage from "./routes/RootPage.tsx";
import ProfilePage from "./routes/profile/index.tsx";
import TeamsPage from "./routes/teams/index.tsx";
import ProjectsPage from "./routes/projects/index.tsx";
import UsersPage from "./routes/users/index.tsx";
import SettingsPage from "./routes/settings/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<RootPage />} />

      <Route
        path="/profile"
        element={<ProfilePage />}
        loader={async ({ params }) => {
          console.log(params);
          return { data: "balalba" };
        }}
      />
      <Route
        path="/teams"
        element={<TeamsPage />}
        loader={async ({ params }) => {
          console.log(params);
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ data: "balalba" });
            }, 2000);
          });
        }}
      />
      <Route
        path="/projects"
        element={<ProjectsPage />}
        loader={async ({ params }) => {
          console.log(params);
          return { data: "balalba" };
        }}
      />
      <Route
        path="/users"
        element={<UsersPage />}
        loader={async ({ params }) => {
          console.log(params);
          return { data: "balalba" };
        }}
      />
      <Route
        path="/settings"
        element={<SettingsPage />}
        loader={async ({ params }) => {
          console.log(params);
          return { data: "balalba" };
        }}
      />
      <Route
        path="user/:userId"
        element={<h1>user</h1>}
        loader={async ({ params }) => {
          console.log(params);
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve({ data: "new" }), 3000);
          });
        }}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
