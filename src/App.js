import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Service from './Component/Service'
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home></Home>}></Route>
        <Route path="Contact" element={<Contact></Contact>}></Route>
        <Route path="Service" element={<Service></Service>}></Route>
      </Routes>
  
   
    </div>
  );
}

export default App;
