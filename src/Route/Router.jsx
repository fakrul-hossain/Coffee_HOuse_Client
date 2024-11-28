import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";



  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: "addCoffee",
          element: <AddCoffee />
        },
        {
          path: "updateCoffee/:id",
          element: <UpdateCoffee />,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
      ],
    },
  ]);
export default Router;