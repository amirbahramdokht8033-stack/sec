import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/laoute/laoute"
import Pro from "./pages/pro/pro"
import Cart from "./pages/cart/cart"
import {  ShopCartProvider } from "./context/cartcontext"


function App() {


  return (
    <>
      <ShopCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/item/:id" element={<Pro />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </ShopCartProvider>

    </>

  )
}

export default App
