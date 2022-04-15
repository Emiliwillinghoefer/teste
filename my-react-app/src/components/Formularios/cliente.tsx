import React from 'react';
import Botao from '../botao';

class Cliente extends React.Component {
  
    render() {
        return (
            <form>
              <div><h3>Cadastro de cliente</h3>
              <label htmlFor="tarefa">
                  Nome do cliente
                </label>
                <input
                    type="text"
                    name="Nome"
                    id="Nome"
                    placeholder="nome do cliente"
                    required
                  />
                  
              </div>
              <div>
                <label>Contato</label>
                  <input
                    type="text"
                    name="tarefa"
                    id="Contato"
                    placeholder="numero de contato"
                    required
                  />
              </div>
              <div>
                <label>Endereço</label>
                  <input
                    type="text"
                    name="Endereço"
                    id="Endereço"
                    placeholder="Endereço do cliente"
                    required
                  />  
                
                
              </div>
              <Botao/>
          </form>
        )
      }
  
}
export default Cliente;