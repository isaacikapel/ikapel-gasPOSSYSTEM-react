import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import SearchBox from "./Components/SearchBox";
import Messages from "./Pages/Messages";
import ShoppingCart from "./Pages/ShoppingCart";
import Profile from "./Pages/Profile";
import TrackOrder from "./Pages/TrackOrder";
import Transactions from "./Pages/Transactions";
import LogOut from "./Pages/LogOut";
import Blog from "./Components/Blog";
import ContactUs from "./Pages/ContactUs";
import Carousel from "./Pages/Carousel";
import GasCylinders from './Pages/GasCylinders';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="products" element={<Products />}/>
        <Route path="search" element={<SearchBox />}/>
        <Route path="messages" element={<Messages />}/>
        <Route path="shopping-cart" element={<ShoppingCart />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="track-order" element={<TrackOrder />}/>
        <Route path="transactions" element={<Transactions />}/>
        <Route path="logout" element={<LogOut />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="help" element={<ContactUs />}/>
        <Route path="carousel" element={<Carousel />}/>
        <Route path="gascylinders" element={<GasCylinders />}/>
      </Route>
    </Routes>   {/* A <Route> with a path of "/" will render <Home /> when at the root URL */}
  </BrowserRouter>
  )
}

export default App
