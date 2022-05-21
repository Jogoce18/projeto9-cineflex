import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Sala from '../Sala/Sala';
import Legenda from '../Legenda/Legenda' ;



export default function Assentos({setOrderData, setReturnButton}) {

    const n = useNavigate();
    function Selecione(event) {
        event.preventDefault();

        if(positionSets.length === 0) {
            alert('Selecionar assentos 💺!')
        } else {
            setOrderData({movie: seats.movie.title, day: seats.day.weekday, data: seats.day.date,time: seats.name, name: ValueData.name, cpf: ValueData.cpf, tickets: [...numberSeat]})
            const RESERVA = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
    
            const promise = axios.post(RESERVA, 
                {
                    ids: [...positionSets],
                    name: ValueData.name,
                    cpf: ValueData.cpf.match(/\d/g).join("") 
                })
            
            promise.then((response) => {
                n("/sucesso");
            });
    
            promise.catch(error => alert("Erro no envio "));
        }
        setReturnButton("button-off");
        window.scrollTo(0,0);
    }
    const {idSessao} = useParams();
    const [seats,setSeats] = useState({});
    const [positionSets, setpositionSets] = useState([]);
    const [numberSeat, setNumberSeat] = useState([])
    const [ValueData, setInputData] = useState({name:"", cpf:""}); 
        
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            const {data} = response;
            setSeats(data);
            console.log(seats)
        });
        promise.catch((error) => {console.log(error.response);})
    },[idSessao]);


    return Object.keys(seats).length !== 0 ? (
        <>
            <Telaassentos>
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="Seat">
                        {seats.seats.map((seat) => <Sala key={seat.id} id = {seat.id} number={seat.name} isAvailable={seat.isAvailable} positionSets={positionSets} setpositionSets={setpositionSets} numberSeat={numberSeat} setNumberSeat={setNumberSeat}/>)}
                    </div>
                    <Legenda/>
                    <Form onSubmit={Selecione} >
                        <div className="Information">
                            <label>Nome do comprador:<input type="text" placeholder="Digite seu nome..." required value={ValueData.nome} onChange={(e) => setInputData({...ValueData, name: e.target.value})}></input></label>
                        </div>
                        <div className="Information">
                        <label>CPF do comprador:<input type="text" placeholder="Digite seu CPF..." required value={ValueData.cpf} max='14' onChange={(e) => setInputData({...ValueData, cpf: e.target.value})}></input></label>
                        </div>
                       
                        <div className="submit">
                            <button type="submit">Reservar assento(s)</button>
                        </div>
 
                    </Form>
            </Telaassentos>
            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} sessionData={{weekday: seats.day.weekday, time: seats.name}} />
        </>
    ) : <> <LoadingScreen>
       <img src='./../loading.gif' />
       </LoadingScreen>
    </>

}



const Telaassentos = styled.div`
    h1 {
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 108px;
        margin-bottom: 22px;
    }
    .Seat {
        display: flex;
        flex-wrap: wrap;
        width: 327px;
        height:203px;
        margin: 0 auto;
    }
 
    .circle {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 7px;
        margin-bottom: 18px;
    }
    .circle:nth-child(10n) {
        margin-right: 0px;
    }
    .circle p {
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }

    label,input[type=text] {
        display: block;
    }
    .Information {
        display: flex;
        justify-content:center;
    }
    label {
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
    .container:first-child {
        margin-top: 48px;
    }
    
    input[type=text] {
        width: 327px;
        height: 51px;    
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-top: 6px;
        padding-left: 18px;
    }
    input[type=text]:focus {
        outline: none;
    }
    input[type=text]:first-child {
        margin-bottom: 7px;
    }
    input[type=text]:focus::placeholder {
        color: transparent;
    }
    input[type=text]::placeholder {
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }
    
    .submit {
        text-align: center;
    }
    button[type=submit] {
        width: 240px;
        height: 42px;
        margin-top: 24px;
        margin-bottom: 147px;
        margin-left:57px; 
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        background: rgba(232, 131, 58, 1);
        cursor: pointer;
        background: linear-gradient(to bottom right, #fa6400, #FF9A5A);
        border: 0;
        border-radius: 12px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 2.5;
        outline: transparent;
        padding: 0 1rem;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
    }
`;
const Form = styled.form`
`

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
