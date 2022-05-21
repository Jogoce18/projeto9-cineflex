import React from 'react'
import "./style.css";

export default function Footer({title, posterURL, sessionData}) {
    
    return Object.keys(sessionData).length === 0 ?
        <div className="rodape">
            <div className='background-movie'>
                <img src={posterURL} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    :   <div className="rodape">
            <div className='background-movie'>
                <img src={posterURL} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{sessionData.weekday} - {sessionData.time}</p>
            </div>
        </div>
}
