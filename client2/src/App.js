import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2";
import Product3 from "./Products/Product3";
import Product4 from "./Products/Product4";
import Product5 from "./Products/Product5";



function App() {
  return (
    <>
   <Routes>
   
      <Route path="/" element={<Homepage />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/about" element={<About />}/>  
      <Route path="/contact" element={<Contact />}/>
      <Route path="/policy" element={<Policy />}/>
      <Route path="/product1" element={<Product1 />}/>
      <Route path="/product2" element={<Product2 />}/>
      <Route path="/product3" element={<Product3 />}/>
      <Route path="/product4" element={<Product4 />}/>
      <Route path="/product5" element={<Product5 />}/>
      <Route path="*" element={<Pagenotfound />}/>
   </Routes>
    </>
  );
}

export default App;
