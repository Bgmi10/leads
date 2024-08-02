import { Suspense, lazy } from "react";
import { Header } from "./Components/Header/Header";
import { Mainslider } from "./Components/Mainslider";
import { Offerslider } from "./Components/Offerslider";
import { Products } from "./Components/Productdetail/Products";
import { Samplecard } from "./Components/Samplecard";
import ChatWidget, { Whatsapp } from "./Components/Chatbot/Whatsapp";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { Imageshowcase } from "./Components/Imageshowcase";
import { Footer } from "./Components/Footer";
import './Components/Productdetail/Productoverview.css'

const LazyProductDetail = lazy(() => import('./Components/Productdetail/Productdetail'))

const LazyCartPage = lazy(() => import('./Components/Cart/Cartdetail'))


function App() {

  
  return (
    <div>
     
      <Router >
      <Offerslider />
      <Header />
 
      <ToastContainer />
      <Suspense fallback={<div className="w-1/2  rounded-md h-32 m-10 p-2 offer-shimmer"></div>} >
      
        <Routes>
          <Route path="/" element={
            <>
            <Mainslider />
            <ChatWidget />
            <Products />
            <Samplecard />
            <Imageshowcase />
            </>
          } />
         
        
         <Route path="/productdetail/:id" element ={< LazyProductDetail/>} />

         <Route path="/mycart" element={<LazyCartPage />} />
        
        
     </Routes>
     </Suspense>

     {/* <Footer /> */}
    </Router>
  
    </div>
  );
}

export default App;

