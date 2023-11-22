import { BrowserRouter, Routes} from "react-router-dom";
import Cards from "./Dates"
import Dates from "./Cards"

function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path="/Dates" element={<Dates />}></Route>
      <Route path="/Cards" element={<Cards />}></Route>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
