import React from 'react';
import styled from 'styled-components';
import { Filter } from './components/filtro';

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
 state ={
   minFilter:100,
   maxFilter:1000,
   nameFilter:'produto',
  //  productsInCart:[
     
  //  ] 
 }
 onChangeMinFilter = (event) =>{
   this.setState({minFilter: event.target.value})
 }
 onChangeMaxFilter = (event) =>{
   this.setState({maxFilter: event.target.value})
 }
 onChangeNameFilter= (event) =>{
   this.setState({nameFilter: event.target.value})
 }
  render() {

    return (
      <Div>
        <Header>
          <Carrinho></Carrinho>
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
          <Produtos>
          </Produtos>
        </Main>
        <Footer></Footer>
      </Div>
    )
  }
}

export default App;
