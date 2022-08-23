// import react from 'react';
import "./App.css";
import "./index.css"
import Home from "./components/Home";
import Background from "./components/Me";
// import Benz from "./components/Benz";
import Ads from "./components/Ads";
// import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Error from "./components/Error";


// import Home from './Home';/
// import Maintain from './components/Maintain';
// import Store  from './components/Store';



const App = () => {
    return (
        <Router>
            <Home />
            <NavBar className='Nav'/>
            <Routes>
                <Route path="/" element={<Background />}/>
{/* <Route path="/background" element={</>} /> */}
                <Route path="/ads" element={<Ads />} />
                <Route path="*" element={<Error />} />
                </Routes>
            </Router>
    );
}

    //  {/* <NavBar /> */}
    //         {/* <Routes> */}
    // {/* <Legends /> */}
    // {/* <About /> */}
    // {/* <Maintain/> */}
    // {/* <Store/> */}

export default App;