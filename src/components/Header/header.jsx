import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from "styled-components";
import Ufo from "../imgFoter/ufo.png"
import IconeCarrinho from '../../img/carrinho.png'

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
        }
        
    h1{
        font-size:35px;
        font-style:italic;
    }
`
const Logo = styled.img`
    width:100px;
    height:100px;
`
const ContainerLogoCarrinho = styled.div`
    img {
        height: 50px;
        right: 5%;
        position: fixed;
        top: 10px;
        width: 50px;
    }
    span{
        color: #FFEB63;
        position: fixed;
        right: 5%;
        font-size: 20px;
        font-weight: bold;
        top: 17px;
        margin-right: 10px;
    }

`
export default class Header extends Component {

    render() {
        return (
            <ContainerHeader>
                <div>
                    <Logo src={Ufo} alt="Logo" />
                    <h1>Alpha Geek Squad</h1>
                    <ContainerLogoCarrinho onClick={this.props.monstrarCarrinho}>
                        <AnchorLink href="#carrinho" >
                            <img src={IconeCarrinho} alt="Icone de Carrinho" />
                            <span>{this.props.numeroItensCarrinho}</span>
                        </AnchorLink>
                    </ContainerLogoCarrinho>
                </div>
                <h2>A loja do Colecionador Espacial </h2>
                <h3>Réplicas em tamanho real das principais Criações Humanas para a exploração espacial.</h3>
            </ContainerHeader>
        )
    }

}