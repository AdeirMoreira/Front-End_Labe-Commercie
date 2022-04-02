import React from "react";
import styled from "styled-components";
import Ufo from "../imgFoter/ufo.png"


const ContainerHeader = styled.header`
    padding: 20px;
    color: #8BCB96;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    div{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        display: flex;
            img{
            width:100px;
            height:100px;
            }  
        }
        
    h1{
        font-size:35px;
        font-style:italic;
    }

`
export default function Header() {
    return (
        <ContainerHeader>
            <div>
                <img src={Ufo} alt="Logo" />
                <h1>Alpha Geek Squad</h1>
            </div>
            <h2>A loja do Colecionador Espacial </h2>
            <h3>Réplicas em tamanho real das principais Criações Humanas para a exploração espacial.</h3>
        </ContainerHeader>
    )
}