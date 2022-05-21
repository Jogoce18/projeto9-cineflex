import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
export default function Filme({id,  posterURL}) {
  return (
    <div className='conteiner'>
    <Link to={`/sessoes/${id}`}>
            <img src={posterURL}></img>
    </Link>
    </div>
    );

  
}
