import React from "react";
import styled from "styled-components";
import Ufo from "../imgFoter/ufo.png"


const ContainerHeader = styled.header`
color: #8BCB96;
padding: 20px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 25px;
img{
    width:100px;
    height:100px;
}
h1{
    font-size:35px;
    font-style:italic;
}

`

export default function Header() {
    return (
        <ContainerHeader>
            <img src={Ufo} alt="Logo" />
           
            <h1>Alpha Geek Squad</h1>
           
        </ContainerHeader>
    )





}