import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";



  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('https://coffee-house-server-zeta.vercel.app/coffee')
        },
        {
          path: "addCoffee",
          element: <AddCoffee />
        },
        {
          path: "updateCoffee/:id",
          element: <UpdateCoffee />,
          loader: ({params})=> fetch(`https://coffee-house-server-zeta.vercel.app/coffee/${params.id}`)
        },
        {
          path: "coffeeDetails/:id",
          element: <CoffeeDetails />,
          loader: ({params})=> fetch(`https://coffee-house-server-zeta.vercel.app/coffee/${params.id}`)
        },
      ],
    },
  ]);
export default Router;