import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState} from 'react';
import Topo from "./Topo";
import ExploreMovies from "./ExploreMovies";
import MoviePage from "./MoviePage";
import SessaoMovie from "./SessaoMovie";
import Sucesso from "./Sucesso"

function App() {

    const [ingresso, setIngresso] = useState({ title: "", dataHora: "", assentos: [], idAssentos: [] ,nome: "", cpf: "" });

    function popIngresso(title, dataHora, assentos, idAssentos, nome, cpf) {
       
        setIngresso({
            title:title,
            dataHora:dataHora,
            assentos:assentos,
            idAssentos:idAssentos,
            nome:nome,
            cpf:cpf
        });
    }
   

    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<ExploreMovies />} />
                <Route path="/filme/:idMovie" element={<MoviePage />} />
                <Route path="/sessao/:idSessao" element={<SessaoMovie popIngresso={popIngresso} />} />
                <Route path="/sucesso" element={<Sucesso  title={ingresso.title} />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;

