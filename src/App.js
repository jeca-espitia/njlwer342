import React, { Component } from 'react';



/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato" ],
      valorTarea: ""
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((valorLista) =>
              <li key={valorLista}>{valorLista}</li>
            )}
          </ul>
          <form>
            <input type="text" value={this.state.valorTarea} onKeyPress={this.agregarTarea.bind(this)} onChange={this.cambiarValor.bind(this)} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
          </form>
        </div>
      </div>
    )
  }

  cambiarValor(event) {
    this.setState({
      valorTarea: event.target.value
    });
  }

  agregarTarea(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let lista = this.state.list;
      lista.push(this.state.valorTarea)
      this.setState({
        valorLista: lista,
        valorTarea: ""
      })
    }
  }
}

export default App;
