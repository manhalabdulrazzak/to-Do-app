import {CssBaseline} from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import AppSnackbar from './components/AppSnackbar';
import TodoTable from './components/TodoTable';
import TodoContextProvider from './contexts/TodoContext';

class App extends React.Component {

    render() {
        return (
            <TodoContextProvider>
                <CssBaseline>
                    <TodoTable/>
                    <AppSnackbar/>
                </CssBaseline>
            </TodoContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));