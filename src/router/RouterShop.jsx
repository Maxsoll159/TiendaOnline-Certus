import { Route, Routes } from "react-router-dom"
import { HomePage, Page404 } from "../pages"
import { ProductPage } from "../pages/product/ProductPage"

export const RouterShop = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/*" element={<Page404 />} />

    </Routes>
  )
}
