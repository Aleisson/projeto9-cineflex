import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topo from "./Topo";


function App() {



    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;

