import { Header } from "./Components/Header";
import { Mainslider } from "./Components/Mainslider";
import { Offerslider } from "./Components/Offerslider";
import { Productdetail } from "./Components/Productdetail";
import { Products } from "./Components/Products";
import { Samplecard } from "./Components/Samplecard";
import { Whatsapp } from "./Components/Whatsapp";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
function App() {

  
  return (
    <div>
      <Offerslider />
      <Header />
      <Router >
        <Routes>
          <Route path="/" element={
            <>
            <Mainslider />
            <Whatsapp />
            <Products />
            <Samplecard />
            </>
          } />
         
         <Route path="/productdetail/:id" element ={<Productdetail />} />
     </Routes>
    </Router>
    </div>
  );
}

export default App;
