import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WorksheetSelector from './Worksheet_selector.js';
class App extends React.Component {

    constructor(props) {
        super();
        this.state = {loadWorksheep: false};
    }

    loadStuff = () => {
        this.setState({loadWorksheep: true});
    }

    render() {
        const startPage = (
            <div className="App">
                <h1>Приложение "Агрегатор Анкет" позволяет просматривать записи со стены выбранного сообщества</h1>
                <button onClick={this.loadStuff}>Начать</button>
            </div>
        );

        return (<div>{ this.state.loadWorksheep ? <WorksheetSelector/> : startPage }</div>);

    }
}


export default App;
