import React from 'react';
import styled from 'styled-components';

import './App.css'

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

const Carrinho = styled.div`
    padding: 20px;
    background-color: red;
`
const Footer = styled.footer`
    padding: 20px;
    background-color: #2aa53a;
`
class App extends React.Component {





  arrayDeProdutos = [
    {
      nome: 'New Horizons',
      foto: NewHorizons,
      preco: 7000,
      id: 5
    },
    {
      nome: 'Voyager1',
      foto: Voyager1,
      preco: 5000,
      id: 1
    },
    {
      nome: 'Hubble',
      foto: Hubble,
      preco: 15000,
      id: 8
    },
    {
      nome: 'Sputnik',
      foto: Sputnik,
      preco: 3000,
      id: 2
    },
    {
      nome: 'Cassini',
      foto: Cassini,
      preco: 5000,
      id: 3
    },
    {
      nome: 'Onibus Espacial Challenger',
      foto: Challenger,
      preco: 20000,
      id: 10
    },
    {
      nome: 'Galileo',
      foto: Galileo,
      preco: 5000,
      id: 4
    },
    {
      nome: 'Módulo Lunar Apollo',
      foto: ModuloLunarApollo,
      preco: 4000,
      id: 6
    },
    {
      nome: 'Opportunity',
      foto: Opportunity,
      preco: 10000,
      id: 7
    },
    {
      nome: 'Estação Espacial Internacional',
      foto: EstacaoEspacialInternacional,
      preco: 12000,
      id: 9
    },
    {
      nome: 'Saturno V',
      foto: SaturnoV,
      preco: 10000,
      id: 11
    },
    {
      nome: 'Space X Crew Dragon 2',
      foto: SpaceXCrewDragon2,
      preco: 25000,
      id: 12
    }
  ]


 state ={
   minFilter:100,//valor minimo
   maxFilter:1000,//valor maximo
   nameFilter:'',
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
   console.log(this.state.nameFilter)
 }

  render() {

    return (
      <Div>
        <Header>
          <Carrinho>

          </Carrinho>
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
          <Produtos arrayDeProdutos={this.arrayDeProdutos} />
        </Main>
        <Footer></Footer>
      </Div>
    )
  }
}

export default App;
