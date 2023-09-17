// React & Libraries
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

// 0qyZ62KzAlcFfeMx
// 5
