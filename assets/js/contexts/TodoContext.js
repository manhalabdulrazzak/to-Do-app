import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'do something1'},
                {name: 'do something2'},
                {name: 'do something3'},
                {name: 'do something4'},
                {name: 'do something5'},
                {name: 'do something6'},
                {name: 'do something7'},
            ],
        };
    }
//create tode
    createTodo(event, todo) {
        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos: data,
        });
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
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

export default TodoContextProvider;