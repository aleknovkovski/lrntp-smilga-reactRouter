import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={(<>
                    <Navbar/>
                    <Outlet/>
                </>)}>
                    <Route index element={<h2>Homepage content</h2>} />
                    <Route path='about' element={<About />} />
                    <Route path='products' element={<Products />} />
                    <Route path="*" element={<Error/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
