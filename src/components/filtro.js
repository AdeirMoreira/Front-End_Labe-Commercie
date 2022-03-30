import React from 'react';
import styled from 'styled-components'
const ContainerFiltro = styled.div`
    padding: 20px;
    background-color: yellow;
    grid-area: filtro;
    width:fit-content;
`

export class Filter extends React.Component {
   
    render() {
        return (


            <ContainerFiltro>
                <h3>filtro:</h3>
                <p>Valor mínimo:</p>
                <input 
                type="number" 
                value={this.props.minFilter} 
                onChange = {this.props.onChangeMinFilter} 
                />
                <p>Valor máximo:</p>
                <input
                
                type="number"
                value = {this.props.maxFilter} 
                onChange = {this.props.onChangeMaxFilter}/>
               
                <p>Busca por nome:</p>
                <input/>

            </ContainerFiltro>

        )
    }
}