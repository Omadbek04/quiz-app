//rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layout/RootLayout";

//pages
import Error from "./pages/Error";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "quiz",
          element: <Quiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
