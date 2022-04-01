import React from "react";
import { CardProdutos } from "../cardProdutos/cardProdutos";
import styled from "styled-components";




const ProdutosContainer = styled.div`
    padding: 20px;
    grid-area: produto;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(220px, 260px));
    gap: 20px;
    font-family: 'Roboto', sans-serif;
`
const ConteinerOrdenacao = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0px 0px;
    button {
        font-size: 15px;
        background-color: #f9f9f1;
        font-weight: 700;
        background-color: #c4ff0d;
    }
    label {
        font-size: 20px;
        font-weight: bold;
        select {
            font-size: 18px;
            background-color: #c4ff0d;
            option {
            font-size: 15px;
            background-color: #f9f9f1;
            font-weight: bold;
            }
        }
        
    }
    
`
export class Produtos extends React.Component {
    state = {
        ordenacao: 'titulo',
        classificacao: 1
    }

    onChageOrendenação = (event) => {
        this.setState({ ordenacao: event.target.value })
    }
    onChageclassificacao = (event) => {
        this.setState({ classificacao: event.target.value })
        console.log(this.state.classificacao)
    }
    limpaOrdenacaoeClassificacao = () => {
        this.setState({ ordenacao: 'titulo' })
        this.setState({ classificacao: 1 })
    }
    chama2funcoes = () => {
        this.props.limpaFiltro()
        this.limpaOrdenacaoeClassificacao()
    }
    render() {
        const { arrayDeProdutos, minFilter, maxFilter, nameFilter } = this.props
        //destruturação do props

        return (
            <div>
                <ConteinerOrdenacao>
                    <button onClick={this.chama2funcoes}>Limpar os Filtros </button>
                    <label htmlFor="Ordenacao">Ordenar por:
                        <select value={this.state.ordenacao} name='Ordenacao' onChange={this.onChageOrendenação}>
                            <option value="titulo">Nome</option>
                            <option value="preco">Preço</option>
                        </select>
                    </label>
                    <label htmlFor="Ordenacao">Classificar por:
                        <select value={this.state.classificacao} name='Ordenacao' onChange={this.onChageclassificacao}>
                            <option value={1}>Crescente</option>
                            <option value={-1}>Decrescente</option>
                        </select>
                    </label>
                </ConteinerOrdenacao>
                <ProdutosContainer >
                    {arrayDeProdutos.filter(produto => {
                        return produto.nome.toLowerCase().includes(nameFilter.toLowerCase())
                        /* foi usado o método includes para filtrar os produtos cujo nome tem o termo que o usuario digitou no campo de busca*/
                    }).filter(produto => {
                        return minFilter === '' || produto.preco >= minFilter
                        // Se o campo não estiver preenchido ele retornara true para todos os produtos, se não estiver fazia, retornará aqueles produtos
                        // que o preço é MAIOR que o valor de minFilter
                    }).filter(produto => {
                        return maxFilter === '' || produto.preco <= maxFilter
                        // Se o campo não estiver preenchido ele retornara true para todos os produtos, se não estiver fazia, retornará aqueles produtos
                        // que o preço é MENOR que o valor de maxFilter
                    }).sort((produtoAtual, proximoProduto) => {
                        switch (this.state.ordenacao) {
                            case 'preco':
                                return this.state.classificacao * (produtoAtual.preco - proximoProduto.preco)
                            default:
                                return this.state.classificacao * produtoAtual.nome.localeCompare(proximoProduto.nome)
                        }
                    }).map(produto => {
                        return (
                            <CardProdutos key={produto.id}
                                produtoID={produto.id}
                                alt={produto.name}
                                foto={produto.foto}
                                nomeDoProduto={produto.nome}
                                preco={produto.preco}
                                addProdutoCarrinho={this.props.addProdutoCarrinho}
                            />
                        )
                    })}
                </ProdutosContainer>
            </div>
        )
    }
}