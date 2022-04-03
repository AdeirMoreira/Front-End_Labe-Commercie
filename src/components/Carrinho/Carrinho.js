import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  visibility: ${({ mostrar }) => mostrar ? 'visible' : 'hidden'};
  color: white;
  margin: 10px;
  padding: 10px;
  grid-area: carrinho;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 850px) {
        width: 280px;
        margin: 0 auto;
    }
`;
const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Texto = styled.p`
  font-size: 16px;
`;
const TextoNome = styled.p`
  font-size: 16px;
  text-align: center;
`
const BotaoRemoverItem = styled.button`
  border-radius: 10px;
  border: none;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`
class Carrinho extends React.Component {
  render() {
    return (
      <div id='carrinho'>
        {this.props.monstrarCarrinho ?
          <Container
            mostrar={this.props.monstrarCarrinho} >
            <h3>Carrinho</h3>
            {
              this.props.produtosCarrinho.map((produto) => (
                <ContainerFlex key={produto.id}>
                  <Texto>{produto.quantidade}x</Texto>
                  <TextoNome>{produto.nome}</TextoNome>
                  <Texto>R$ {produto.preco},00</Texto>
                  <BotaoRemoverItem onClick={() => this.props.removerDoCarrinho(produto.id)}>Remover</BotaoRemoverItem>
                </ContainerFlex>
              ))
            }
            {
              this.props.produtosCarrinho.length > 0 ? (
                <>
                  <p>Valor Total: R$ {this.props.total},00</p>
                  <ContainerBotoes>
                    <BotaoRemoverItem onClick={this.props.limpaCarrinho}>Esvaziar o Carrinho</BotaoRemoverItem>
                    <BotaoRemoverItem onClick={this.props.fecharCarrinho}>Fechar o Carrinho</BotaoRemoverItem>
                  </ContainerBotoes>
                </>
              ) : (
                <>
                  <p>O Carrinho está vazio</p>
                  <BotaoRemoverItem onClick={this.props.fecharCarrinho}>Fechar o Carrinho</BotaoRemoverItem>
                </>
              )
            }
          </Container >
          : <></>
        }
      </div>
    );
  }
}

export default Carrinho;