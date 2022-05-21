import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
export default function Timemovie({weekday, date, showtimes, setSessionData}) {
  return (
    
    <div class='sessoes'>
    <span>{weekday}-{date}</span>
    <div className="hora">
          {showtimes.map(hora =>{
                return(
                    <Link to={`/assentos/${hora.id}`}>
                        <button className='butonsessoes'>{hora.name}</button>
                    </Link>    
                )
            } )}
    
    </div>
</div>
  )
}
