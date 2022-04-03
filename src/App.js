import React from 'react';
import styled from 'styled-components';

import Voyager1 from './img/Voyager.jpg'
import Sputnik from './img/Sputnik.jpg'
import Cassini from './img/Cassini.webp'
import Galileo from './img/Galileo.jpg'
import NewHorizons from './img/New Horizons.jpg'
import ModuloLunarApollo from './img/Modulo Lunar Apollo.jpg'
import Opportunity from './img/Opportunity.jpg'
import Hubble from './img/Hubble.jpg'
import EstacaoEspacialInternacional from './img/Estacao Espacial Internacional.jpg'
import Challenger from './img/Challenger.jpg'
import SaturnoV from './img/Saturno V.jpg'
import SpaceXCrewDragon2 from './img/SpaceX Crew Dragon 2.jpg'

import { Home } from './components/home/home';
import Carrinho from './components/Carrinho/Carrinho';
import { Filter } from './components/filtro/filtro';
import Footer from './components/footer/footer';
import Header from './components/Header/header';

const Div = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const Main = styled.main`
    flex: 1 0 auto;
    display: grid;
    grid-template: 
    'filtro  produto carrinho'
    /200px auto ${({ monstrarCarrinho }) => monstrarCarrinho ? '320px' : '0px'};
    @media screen and (max-width: 850px) {
    grid-template:
    "filtro"
    "carrinho"
    "produto"
    /auto;
    justify-content: center;
    }
`
class App extends React.Component {
  arrayDeProdutos = [
    {
      nome: 'New Horizons',
      foto: NewHorizons,
      preco: 7000,
      id: 5,
      quantidade: 0
    },
    {
      nome: 'Voyager1',
      foto: Voyager1,
      preco: 5000,
      id: 1,
      quantidade: 0
    },
    {
      nome: 'Hubble',
      foto: Hubble,
      preco: 15000,
      id: 8,
      quantidade: 0
    },
    {
      nome: 'Sputnik',
      foto: Sputnik,
      preco: 3000,
      id: 2,
      quantidade: 0
    },
    {
      nome: 'Cassini',
      foto: Cassini,
      preco: 5000,
      id: 3,
      quantidade: 0
    },
    {
      nome: 'Onibus Espacial Challenger',
      foto: Challenger,
      preco: 20000,
      id: 10,
      quantidade: 0
    },
    {
      nome: 'Galileo',
      foto: Galileo,
      preco: 5000,
      id: 4,
      quantidade: 0
    },
    {
      nome: 'Módulo Lunar Apollo',
      foto: ModuloLunarApollo,
      preco: 4000,
      id: 6,
      quantidade: 0
    },
    {
      nome: 'Opportunity',
      foto: Opportunity,
      preco: 10000,
      id: 7,
      quantidade: 0
    },
    {
      nome: 'Estação Espacial Internacional',
      foto: EstacaoEspacialInternacional,
      preco: 12000,
      id: 9,
      quantidade: 0
    },
    {
      nome: 'Saturno V',
      foto: SaturnoV,
      preco: 10000,
      id: 11,
      quantidade: 0
    },
    {
      nome: 'SpaceX Crew Dragon 2',
      foto: SpaceXCrewDragon2,
      preco: 25000,
      id: 12,
      quantidade: 0
    }
  ]

  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    produtosNoCarrinho: [],
    total: 0,
    mostraCarrinho: true,
    numeroItensCarrinho: ''
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.produtosNoCarrinho !== this.state.produtosNoCarrinho) {
      localStorage.setItem('produtosNoCarrinho', JSON.stringify(this.state.produtosNoCarrinho))
    }
    if (prevState.numeroItensCarrinho !== this.state.numeroItensCarrinho) {
      localStorage.setItem('numeroItensCarrinho', JSON.stringify(this.state.numeroItensCarrinho))
    }
    if (prevState.total !== this.state.total) {
      localStorage.setItem('total', JSON.stringify(this.state.total))
    }
  }
  componentDidMount() {
    localStorage.getItem('produtosNoCarrinho') && this.setState({ produtosNoCarrinho: JSON.parse(localStorage.getItem('produtosNoCarrinho')) })
    localStorage.getItem('numeroItensCarrinho') && this.setState({ numeroItensCarrinho: JSON.parse(localStorage.getItem('numeroItensCarrinho')) })
    localStorage.getItem('total') && this.setState({ total: JSON.parse(localStorage.getItem('total')) })
  }
  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value })

  }
  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value })
  }
  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value })
  }
  adicionarAoCarrinho = (produtoId) => {
    const produtoExistenteCarrinho = this.state.produtosNoCarrinho.find((produto) => produtoId === produto.id,);

    if (produtoExistenteCarrinho) {
      const novosProdutosCarrinho = this.state.produtosNoCarrinho.map((produto) =>
        produtoId === produto.id ? { ...produto, quantidade: produto.quantidade + 1 } : produto,
      );

      const total = novosProdutosCarrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0,
      );

      let numeroItensCarrinhoAtualizado = this.state.numeroItensCarrinho
      numeroItensCarrinhoAtualizado++

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
        numeroItensCarrinho: numeroItensCarrinhoAtualizado,
      });
    } else {
      const novoProdutoCarrinho = this.arrayDeProdutos.find((produto) => produtoId === produto.id);

      const novosProdutosCarrinhoAtualizados = [
        ...this.state.produtosNoCarrinho,
        { ...novoProdutoCarrinho, quantidade: 1 },
      ];

      const total = novosProdutosCarrinhoAtualizados.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,
        0,
      );

      let numeroItensCarrinhoAtualizado = this.state.numeroItensCarrinho;
      numeroItensCarrinhoAtualizado++;

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinhoAtualizados,
        total: total,
        numeroItensCarrinho: numeroItensCarrinhoAtualizado,
      });
    }

  }
  removerDoCarrinho = (produtoId) => {
    const removerProduto = this.state.produtosNoCarrinho
      .map((produto) =>
        produtoId === produto.id ? { ...produto, quantidade: produto.quantidade - 1 } : produto,
      )
      .filter((produto) => produto.quantidade > 0);

    const total = removerProduto.reduce(
      (total, produto) => total + produto.preco * produto.quantidade,
      0,
    );

    let numeroItensCarrinhoAtualizado = this.state.numeroItensCarrinho;
    this.state.numeroItensCarrinho > 1 ? numeroItensCarrinhoAtualizado-- : numeroItensCarrinhoAtualizado = '';

    this.setState({
      produtosNoCarrinho: removerProduto,
      total: total,
      numeroItensCarrinho: numeroItensCarrinhoAtualizado,
    });
  };
  onClickMostraCarrinho = () => {
    this.state.mostraCarrinho === false && this.setState({ mostraCarrinho: true })
  }
  onClickFecharCarrinho = () => {
    this.state.mostraCarrinho === true && this.setState({ mostraCarrinho: false })
  }
  onClickLimparCarrinho = () => {
    this.setState({ produtosNoCarrinho: [], numeroItensCarrinho: '' })
  }
  onClickLimpaFiltro = () => {
    this.setState({ minFilter: '' })
    this.setState({ maxFilter: '' })
    this.setState({ nameFilter: '' })
  }
  render() {

    return (
      <Div>
        <Header
          monstrarCarrinho={this.onClickMostraCarrinho}
          numeroItensCarrinho={this.state.numeroItensCarrinho}
        />
        <Main
          monstrarCarrinho={this.state.mostraCarrinho}
        >
          <Filter
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onChangeMinFilter={this.onChangeMinFilter}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeNameFilter={this.onChangeNameFilter}
          />
          <Home
            arrayDeProdutos={this.arrayDeProdutos}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            addProdutoCarrinho={this.adicionarAoCarrinho}
            limpaFiltro={this.onClickLimpaFiltro}
          />
          <Carrinho
            produtosCarrinho={this.state.produtosNoCarrinho}
            total={this.state.total}
            removerDoCarrinho={this.removerDoCarrinho}
            monstrarCarrinho={this.state.mostraCarrinho}
            fecharCarrinho={this.onClickFecharCarrinho}
            limpaCarrinho={this.onClickLimparCarrinho}
          />
        </Main>
        <Footer />
      </Div>
    )
  }
}
export default App;
