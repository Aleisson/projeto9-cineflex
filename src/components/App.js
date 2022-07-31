import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topo from "./Topo";
import ExploreMovies from "./ExploreMovies";

function App() {



    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<ExploreMovies />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;

