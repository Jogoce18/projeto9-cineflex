import styled from 'styled-components';
import {useState} from 'react'


export default function Sala({id, number, isAvailable, positionSets, setpositionSets, numberSeat, setNumberSeat}) {


    const [seatSelected, setSeatSelected] = useState(false)


    function seatVerification() {
        if(isAvailable === false) {
            alert("Este assento nao esta disponivel 🙁");
            return;
        } else {
            setSeatSelected(!seatSelected);
            if(!seatSelected === true && !positionSets.includes(id)) {
                setpositionSets([...positionSets, id])
                setNumberSeat([...numberSeat, number])
            }
            if(!seatSelected === false && positionSets.includes(id)) {
                setpositionSets([...positionSets].filter((value) => value !== id))
                setNumberSeat([...numberSeat, number].filter((value) => value !== number))
            }
        }
    }


    return (
        <SeatSession className="circle" isAvailable={isAvailable} seatSelected={seatSelected} onClick={seatVerification} borderColor={isAvailable}>
            <p>{number}</p>
        </SeatSession>
    );
}


const SeatSession = styled.div `
    cursor: pointer; 
    background-color: ${props => props.isAvailable === true ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable === true ? "#7B8B99" : "#F7C52B"};
    background-color: ${props => props.seatSelected === true ? "#8DD7CF" : ""};
`;