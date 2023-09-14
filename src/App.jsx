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
} from "./pages";

function App() {
  const router = createBrowserRouter([
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
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
