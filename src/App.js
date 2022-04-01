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

import { Produtos } from './components/produtos/produtos';
import Carrinho from './components/Carrinho/Carrinho';
import { Filter } from './components/filtro/filtro';
import Footer from './components/footer/footer';






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
const Header = styled.header`
    padding: 20px;
    
`
const Main = styled.main`
    flex: 1 0 auto;
    display: grid;
    grid-template: 

    'filtro  produto carrinho'
    /200px auto 280px;
    @media screen and (max-width: 480px) {
    grid-template:
    "filtro"
    "carrinho"
    "produto";
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
    // productsInCart: []
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

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
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

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinhoAtualizados,
        total: total,
      });
    }

  }
  //   onClickRemoveProduto = (produtoID) => {
  //     const produtoRemovido = this.state.productsInCart.map(produto => {
  //       if (produto.id === produtoID) {
  //         return {
  //           ...produto, quantidade: produto.quantidade - 1
  //         }
  //       }
  //       return produto
  //     }).filter(produto => produto.quantidade > 0)
  //     this.setState({ productsInCart: produtoRemovido })
  //   }



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

    this.setState({ produtosNoCarrinho: removerProduto, total: total });
  };



  // onClickAddProdutoCarrinho = (produtoID) => {
  //   const produppNoCarrinho = this.state.productsInCart.find(prduto => prduto.id === produtoID)
  //   if (produppNoCarrinho) {
  //     const novoProdutoNoCarrinho = this.state.productsInCart.map(produto => {
  //       if (produto.id === produtoID) {
  //         return { ...produto, quantidade: produto.quantidade + 1 }
  //       }
  //       return produto
  //     })
  //     this.setState({ productsInCart: novoProdutoNoCarrinho })
  //   }
  //   else {
  //     const produtoAdcionado = this.arrayDeProdutos.find(prduto => prduto.id === produtoID)
  //     const novoProdutoNoCarrinho = [...this.state.productsInCart, { ...produtoAdcionado, quantidade: 1 }]
  //     this.setState({ productsInCart: novoProdutoNoCarrinho })
  //   }
  // }





  onClickLimpaFiltro = () => {
    this.setState({ minFilter: '' })
    this.setState({ maxFilter: '' })
    this.setState({ nameFilter: '' })
  }
  render() {

    return (
      <Div>
        <Header>
        </Header>
        <Main>
          <Filter
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onChangeMinFilter={this.onChangeMinFilter}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeNameFilter={this.onChangeNameFilter}
          />
          <Produtos
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
          />
        </Main>
        <Footer />
      </Div>
    )
  }
}
export default App;
