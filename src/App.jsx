// React & Libraries
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Styles
import GlobalStyles from "./styles/GlobalStyles";

// Pages
import {
  Dashboard,
  Account,
  Bookings,
  Cabins,
  Login,
  Settings,
  Users,
  PageNotFound,
} from "./pages";

// UI Components
import { AppLayout } from "./ui";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Navigate replace to="/dashboard" />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/bookings",
          element: <Bookings />,
        },
        {
          path: "/cabins",
          element: <Cabins />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// 0qyZ62KzAlcFfeMx
// 7
