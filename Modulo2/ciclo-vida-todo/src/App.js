import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  background-color: whitesmoke;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
 
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;



`



const DIV = styled.div`
border: 3px solid Black;
  height: 300px;
  width: 300px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  text-align: center;
  

`


class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Tarefa1',
          completa: false,
        },
        {
          id: Date.now(),
          texto: 'Tarefa2',
          completa: false,
        },
        
      ],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {

   
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
   

  };

  componentDidMount() {

    
      const tarefasString = localStorage.getItem("tarefas");

      if (tarefasString) {
        const tarefas = JSON.parse(tarefasString);
this.setState({ tarefas });
      }

  };

  onChangeInput = (event) => {

    this.setState({ inputValue: event.target.value });

  }

  criaTarefa = () => {

    if (this.state.inputValue) {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      };

      this.setState({
        tarefas: [...this.state.tarefas, novaTarefa],
        inputValue: ""
      });
    }

  }

  selectTarefa = (id) => {

    const novatarefas = this.state.tarefas.map(tarefa => {
      
  if (tarefa.id === id) {
            return {
            ...tarefa,
            completa: !tarefa.completa
          };
        }
        return tarefa;
      });
  
      this.setState({ tarefas: novatarefas });
    }

  onChangeFilter = (event) => {

    this.setState({ filter: event.target.value });
  

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filter) {
        case 'pendentes':
          return !tarefa.Pendentes
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Container>
      <DIV>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </DIV>
      </Container>
    )
  }
}

export default App
