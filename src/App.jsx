import { useEffect, useState } from "react"
import { getProducts } from "./actions/products.api"
import { CardProduct, Loading, Navbar, TabCategories, Title } from "./components"
import { RouterShop } from "./router/RouterShop"



export const App = () => {



  return (
    <>
       <Navbar />
      <RouterShop />
    </>
  )
}
