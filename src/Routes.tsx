import {
  Routes as Routers,
  Route
} from "react-router-dom";
import { Login } from "./components/Login";

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
      <Route path="*" element={<NotFound />} />
    </Routers>
  )
}