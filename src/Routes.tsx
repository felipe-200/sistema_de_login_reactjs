import { useRoutes } from "react-router-dom";
import { ListClients } from "./Pages/ListClients"
import { Login } from "./Pages/Login";

import { PrivateRoute } from "./utils/PrivateRoute";

const NotFound = () => {
  return (
    <div>
      <h3> Not Found </h3>
    </div>
  )
}

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: '/app',
      element: <PrivateRoute />,
      children: [
        {
          path: "/app",
          element: <ListClients />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return routes
}