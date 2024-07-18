// External libraries
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

// Components and pages
import App from "../App"
import { Welcome, About, Products, Product, Contact } from "../pages";
import { productLoader, productsLoader } from "../helpers";
import { Category, ProductParams } from "../types/product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route path=":category" element={<Products />} loader={async ({ params }) => productsLoader(params as { category: Category })} />
      <Route path=":category/:productId" element={<Product />} loader={async ({ params }) => productLoader(params as ProductParams)} />
      <Route path="contact" element={<Contact />} />
      <Route path="404" element={<div>Page not found 404</div>} />
    </Route >
  )
);

export default router;