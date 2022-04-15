import React from 'react';
import Botao from '../botao';

class Produtos extends React.Component {
  render() {
      return (
          <form>
            <div><h3>Cadastro de Produtos</h3>
            <label htmlFor="tarefa">
                 Produto
               </label>
               <input
                  type="text"
                  name="Nome"
                  id="Nome"
                  placeholder="nome do produto"
                  required
                />
                
            </div>
            <div>
              <label>Valor</label>
                <input
                  type="text"
                  name="tarefa"
                  id="Valor"
                  placeholder="R$"
                  required
                />
            </div>
            <div>
              <label>Descrição</label>
                <input
                  type="text"
                  name="Endereço"
                  id="Endereço"
                  placeholder="Descrição do produto"
                  required
                />              
            </div>
            <div>
              <label>Quantidade de estoque</label>
                <input
                  type="text"
                  name="estoque"
                  id="estoque"
                  placeholder="estoque do produto"
                  required
                />              
            </div>
            <Botao/>
        </form>
      )
    }
}
export default Produtos;