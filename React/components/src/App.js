import Home from "./components/Home.js"
import Header from "./components/Header.js"
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from  "./components/NotFound.js"


function App() {
  return (
    <div >
       {/* <Header />  */} 
      <div >
        {/* <h1>Welcome to React Router!</h1> */}
        <BrowserRouter>
        <Header /> 
          <Routes>
          <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
