import styled from 'styled-components'
export default function Legenda(){
    return(
        <Legendas>
            <div>
                <SeatMovie color="#8DD7CF"  border="#afe6c3"></SeatMovie>
                <Description>Selecionado</Description>
            </div>
            <div>
                <SeatMovie color="#C3CFD9"  border="#808F9D"></SeatMovie>
                <Description>Disponivel</Description>
            </div>
            <div>
                <SeatMovie color="#FBE192"  border="#F7C52B"></SeatMovie>
                <Description>Indisponível</Description>
            </div>
        </Legendas>
    )
}

const Legendas = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left:24px;
    margin-right:24px;
    margin-bottom:45px;
    .div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    `
const Description= styled.span`   
    height: 28px;
    width: 91px;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    text-align: left;
    color: #4E5A65;
`
const SeatMovie = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};
    margin-bottom:5px;
    align-items: center;
    margin: auto;
    margin-bottom:5px ;
    margin-top:3px
`