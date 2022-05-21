import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Timemovie from '../Timemovie/Timemovie';
import Footer from '../Footer/Footer';

export default function Sessao(){

    const {idFilme} = useParams();
    const [sessions, setSessions] = useState([])
    const [sessionData, setSessionData] = useState({})
    


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
            const {data} = response;
            setSessions(data);
        });
        promise.catch((error) => {console.log(error.response);})
    },[idFilme]);


    return sessions.length !== 0 ? (
    
         <div className='home'>
         <h1>Selecione o filme</h1>   
        <div className="sessions">      
        {sessions.days.map((session) => <Timemovie key={session.id} weekday={session.weekday} date={session.date}
        showtimes={session.showtimes} setSessionData={setSessionData} />)}
         </div>
        <Footer posterURL={sessions.posterURL} title={sessions.title} sessionData={sessionData}/>
        </div>
    ) : <>
          
        </>
}

