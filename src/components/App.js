import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topo from "./Topo";
import ExploreMovies from "./ExploreMovies";
import MoviePage from "./MoviePage";
import SessaoMovie from "./SessaoMovie";

function App() {



    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<ExploreMovies />} />
                <Route path="/filme/:idMovie" element={<MoviePage />} />
                <Route path="/sessao/:idSessao" element={<SessaoMovie />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;

