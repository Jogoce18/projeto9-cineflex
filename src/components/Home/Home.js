import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from "../Filme/Filme";
import styled from 'styled-components';

import "./style.css";

export default function Home() {
  const API="https://mock-api.driven.com.br/api/v5/cineflex/movies";
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const promise = axios.get(API)
    promise.then((response) => {
        const {data} = response;
        setMovies(data)
    })
    promise.catch((error) => {console.log(error.response);})
},[])

  return movies.length !== 0 ?  (
    <div className='home'>
    <h1>Selecione o filme</h1>
    <div className='movies-list'>
    {movies.map(filme => <Filme key={filme.id} id={filme.id} title={filme.title} posterURL={filme.posterURL} overview={filme.overview} releaseDate={filme.releaseDate} />)}
    </div>
</div >
  ): <LoadingScreen>
     <img src='./../loading.gif' />
    </LoadingScreen>
}

const LoadingScreen = styled.div`
    //centralizar loading.gif
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
    img {
    width: 200px;
    height:200px;
    }
`