import React, {Component} from 'react';
import TodoContextProvider from "./contexts/TodoContext";
import TodoTable from "./components/TodoTable";

class App extends Component {
    render() {
        return (
            <div>
                <TodoContextProvider>
                    <TodoTable/>
                </TodoContextProvider>
            </div>
        );
    }
}

export default App;