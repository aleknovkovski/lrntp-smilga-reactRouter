import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>home page</div>}/>
                <Route path="/testing" element={<div>testing page</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
