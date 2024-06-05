// External libraries
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// Components and pages
import App from "../App"
import { Welcome, About, Products, Product, Contact } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<Product />} />
      <Route path="contact" element={<Contact />} />
    </Route >
  )
);

export default router;