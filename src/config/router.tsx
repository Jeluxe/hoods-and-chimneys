// External libraries
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// Components and pages
import App from "../App"
import { Welcome, About, Products, Contact } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Route >
  )
);

export default router;