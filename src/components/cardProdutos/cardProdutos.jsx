import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    max-width: 300px;
    width: 100%;
    border: 1px solid black;
    background-color: #f9f9f1;
    img {
        max-width: 300px;
        width: 100%;
        height: 250px;
    }
    div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
        span:nth-child(1) {
        font-size: 20px;
        text-align: center;
        padding: 5px;
        font-weight: bold;
        }
        span:nth-child(2) {
        font-size: 20px;
        text-align: center;
        padding: 5px;
        font-style: italic;
        }
        button {
        background-color: #c4ff0d;
        font-size: 30px;
        color: black;
        width: fit-content;
        margin: 0 auto;
        font-weight: bolder;
        width: 200px;
        height: 50px;
        border-radius: 10px;
        }
    }
    
`
const Button = styled.button `
margin-bottom: 12px;
border-radius: 10px;
border: none;
padding: 10px;
cursor: pointer;
&:hover {
background-color: lightgrey;
}
`


export class CardProdutos extends React.Component {
    render() {

        return (
            <ContainerCard>
                <img src={this.props.foto} alt={`foto da ${this.props.nomeDoProduto}`} />
                <div>
                    <span>{this.props.nomeDoProduto}</span>
                    <span>R${this.props.preco}</span>
                    <button onClick={() => this.props.addProdutoCarrinho(this.props.produtoID)}>Comprar</button>
                </div>

            </ContainerCard>
        )
    }
}