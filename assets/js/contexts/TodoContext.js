import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [{task: 'do do do '}],
        };
    }
//create tode
    createTodo(){

    }
//read tode
    readTodo(){

    }
//update tode
    updateTodo(){

    }
//delete tode
    deleteTodo(){

    }

    render() {
        return (
          <TodoContext.Provider volue={{
              ...this.state,
              createTodo: this.createTodo.bind(this),
              updateTodo: this.updateTodo.bind(this),
              deleteTodo: this.deleteTodo.bind(this),
          }}>
              {this.props.children}
          </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;