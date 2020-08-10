//React
import React from 'react';
import ReactDOM from 'react-dom';
//custom components
import DefaultThemeProvider from './components/themes/DefaultThemeProvider';
import Router from "./components/Router";

class App extends React.Component {

    render() {
        return <Router/>;
    }
}

ReactDOM.render(
    <DefaultThemeProvider>
        <App/>
    </DefaultThemeProvider>
    , document.getElementById('root'));