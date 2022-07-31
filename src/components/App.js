import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topo from "./Topo";
import ExploreMovies from "./ExploreMovies";
import MoviePage from "./MoviePage";

function App() {



    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<ExploreMovies />} />
                <Route path="/sessoes/:idFilme" element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;

