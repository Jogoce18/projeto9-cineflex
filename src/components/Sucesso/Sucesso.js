import "./style.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucesso({orderData, setOrderData}) {


    return (Object.keys(orderData).length !== 0) ? (
        <>
            <div className="sucess">
                <h1>Pedido feito com sucesso!!</h1>
            </div>
            
            <div className="Information">
                <p>Filme e sessão</p>
                <p>{orderData.movie}</p>
                <p>{orderData.data} {orderData.time}</p>
            </div>
            <div className="Information">
                <p>Ingressos</p>
                {orderData.tickets.map((ticket)=> <p key={ticket}>Assento {ticket}</p>)}
            </div>
            <div className="Information">
                <p>Comprador</p>
                <p>Nome: {orderData.name}</p>
                <p>CPF: {orderData.cpf}</p>
            </div>
            <div className="buttonsito">
                <Link to="/">
                <button   className="buttonsi" onClick={() => setOrderData()}>Voltar para Home  </button>
                 
                </Link>
            </div>
        </>
    )  :<>
     <LoadingScreen>
     <img src='./../loading.gif' />
    </LoadingScreen>
    </>
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

