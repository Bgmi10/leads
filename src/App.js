import { Suspense, lazy } from "react";
import { Header } from "./Components/Header";
import { Mainslider } from "./Components/Mainslider";
import { Offerslider } from "./Components/Offerslider";
import { Products } from "./Components/Products";
import { Samplecard } from "./Components/Samplecard";
import { Whatsapp } from "./Components/Whatsapp";
import {BrowserRouter as Router , Route , Routes, useLocation} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { Breadcrumbs } from "./Components/Breadcrumbs";
import { Imageshowcase } from "./Components/Imageshowcase";
import { Footer } from "./Components/Footer";

const LazyProductDetail = lazy(() => import('./Components/Productdetail'))

const LazyCartPage = lazy(() => import('./Components/Cart/Cartdetail'))


function App() {

  
  return (
    <div>
     
      <Router >
      <Offerslider />
      <Header />
 
      <ToastContainer />
      <Suspense fallback={<div>loading...</div>} >
      
        <Routes>
          <Route path="/" element={
            <>
            <Mainslider />
            <Whatsapp />
            <Products />
            <Samplecard />
            <Imageshowcase />
            </>
          } />
         
        
         <Route path="/productdetail/:id" element ={< LazyProductDetail/>} />

         <Route path="/mycart" element={<LazyCartPage />} />
        
        
     </Routes>
     </Suspense>

     <Footer />
    </Router>
  
    </div>
  );
}

export default App;

