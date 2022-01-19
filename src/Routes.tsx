import {
  Routes as Routers,
  Route
} from "react-router-dom";
import { App } from "./components/App";
import { Login } from "./components/Login";

import { PrivateRoute } from "./utils/PrivateRoute";

const NotFound = () => {
  return (
    <div>
      <h3> Not Found </h3>
    </div>
  )
}

export const Routes = () => {
  return (
    <Routers>
      <Route path="/" element={<Login />} />

      <Route path='/app' element={<PrivateRoute />}>
        <Route path='/app' element={<App />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routers>
  )
}