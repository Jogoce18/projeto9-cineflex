import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Sessao from "./Sessao/Sessao";
import Assentos from "./Assentos/Assentos"
import Sucesso from "./Sucesso/Sucesso";
import { useState } from 'react';
export default function App () {
    const [orderData, setOrderData] = useState("")
    const [returnButton, setReturnButton] = useState("button-off")
    
    return (
<BrowserRouter>
    <Header returnButton={returnButton} />
    <Routes>
    <Route path ='/' element ={<Home/>}/>
    <Route path="/sessoes/:idFilme" element={<Sessao setReturnButton={setReturnButton}/>}></Route>
    <Route path="/assentos/:idSessao" element={<Assentos orderData={orderData} setOrderData={setOrderData} setReturnButton={setReturnButton}/>}></Route>
    <Route path="/sucesso" element={<Sucesso orderData={orderData} setOrderData={setOrderData}/>}></Route>
    </Routes>
</BrowserRouter>    
       
    )
}