import React from 'react';
import styled from 'styled-components'


const ContainerFiltro = styled.div`
    color:white;
    padding: 20px;
    grid-area: filtro;
    input {
        width: 150px;
        background-color: #E8FEFA;
    }

`

export class Filter extends React.Component {

    render() {
        return (


            <ContainerFiltro>
                <h3>filtro:</h3>
                <p>Valor mínimo:</p>
                <input
                    type="number"
                    placeholder='Digite um valor...'
                    value={this.props.minFilter}
                    onChange={this.props.onChangeMinFilter}
                />
                <p>Valor máximo:</p>
                <input

                    type="number"
                    placeholder='Digite um valor...'
                    value={this.props.maxFilter}
                    onChange={this.props.onChangeMaxFilter} />

                <p>Busca por nome:</p>
                <input
                    type="text"
                    placeholder='Digite um nome...'
                    value={this.props.nameFilter}
                    onChange={this.props.onChangeNameFilter}
                />

            </ContainerFiltro>

        )
    }
}