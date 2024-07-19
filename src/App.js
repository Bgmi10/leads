import { Suspense, lazy } from "react";
import { Header } from "./Components/Header";
import { Mainslider } from "./Components/Mainslider";
import { Offerslider } from "./Components/Offerslider";
import { Products } from "./Components/Products";
import { Samplecard } from "./Components/Samplecard";
import { Whatsapp } from "./Components/Whatsapp";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'


const LazyProductDetail = lazy(() => import('./Components/Productdetail'))

const LazyCartPage = lazy(() => import('./Components/Cart/Cartdetail'))

function App() {

  
  return (
    <div>
     
      <Router >
      <Offerslider />
      <Header />
      <Suspense fallback={<div>loading...</div>} >
      
        <Routes>
          <Route path="/" element={
            <>
            <Mainslider />
            <Whatsapp />
            <Products />
            <Samplecard />
            </>
          } />
         
        
         <Route path="/productdetail/:id" element ={< LazyProductDetail/>} />

         <Route path="/mycart" element={<LazyCartPage />} />
        
     </Routes>
     </Suspense>
    </Router>
  
    </div>
  );
}

export default App;
