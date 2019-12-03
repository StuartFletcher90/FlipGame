import React from "react";
import styled from "styled-components";
import ReactCardFlip from 'react-card-flip';
import UggerKnuckers from '../assets/img/ugandanKnuckles.jpeg'
import './Card.css'


const Card = (props) => {
    //console.log(props)
    return (
        <ReactCardFlip isFlipped={props.flipped} flipDirection="vertical">
        <MemeCard onClick={() => {
            props.click(props.index)
        }}>
        <img src={UggerKnuckers} alt="knucklebuckle"/>

        </MemeCard>

        <MemeCardBack>
        <Image src={props.image}>
        </Image>
        </MemeCardBack>
        </ReactCardFlip>
    )
}

export default Card;

const MemeCard = styled.div`
height: 200px;
width: 200px;

display: flex;
justify-content: center;
align-items: center;
margin: 8px;
border-radius: 6px;
`;





const MemeCardBack = styled.div`
height: 200px;
width: 200px;
background-color: #ff9ff3;
display: flex;
justify-content: center;
align-items: center;
margin: 8px;
border-radius: 6px;
overflow: hidden;
`;

const Image = styled.img`
width: 200px;
`;