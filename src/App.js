import React, { Component } from 'react'

const BemVindo = (props) => {
    return(
        <div id='header'>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    )
}
export default class App extends Component {
    render() {
        return (
            <div id='app'>
                <h1>React is awesome! 2</h1>
                <BemVindo nome="Pedro" idade="19"/>
                <BemVindo nome="Guilherme" idade="24"/>
            </div>
        )
    }
}
