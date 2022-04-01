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
    background-color: #E8FEFA;
    img {
        max-width: 300px;
        width: 100%;
        height: 250px;
    }
    div {
        flex-direction: column;
        justify-content: center;
        padding: 5px;
        display: flex;
        height: 150px;
        justify-content: space-between;
        span:nth-child(1) {
            text-align: center;
            padding: 5px;
            font-weight: 700;
            font-size: 25px;
        }
        span:nth-child(2) {
            text-align: center;
            padding: 5px;
            font-style: italic;
        }
        button {
            margin: 0 auto;
            border-radius:10px;
            cursor:pointer;
            font-size:25px;
            font-weight:bold;
            background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
            background-color:#79bbff;
            border-radius:6px;
        }
        button:hover {
            background-color:#ffab23;
            background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
        }
        button:active {
            top:1px;
            position:relative;
        }
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