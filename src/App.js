import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
`
const Header = styled.header`
    padding: 20px;
    background-color: aqua;
`
const Main = styled.main`
    padding: 20px;
    background-color: blue;
    display: grid;
    grid-template: 
    'filtro  produto';
`
const Filtro = styled.div`
    padding: 20px;
    background-color: yellow;
    grid-area: filtro;
`
const Produtos = styled.div`
    padding: 20px;
    background-color: #ff00b3;
    grid-area: produto;
`
const Carrinho = styled.div`
    padding: 20px;
    background-color: red;
`
const Footer = styled.footer`
    padding: 20px;
    background-color: #2aa53a;
`
class App extends React.Component {

  render() {

    return (
      <Div>
        <Header>
          <Carrinho></Carrinho>
        </Header>
        <Main>

          <Filtro>
          </Filtro>
          <Produtos>
          </Produtos>
        </Main>
        <Footer></Footer>
      </Div>
    )
  }
}

export default App;
