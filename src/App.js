import React, { Component } from 'react'

// const BemVindo = (props) => {
//     return(
//         <div id='header'>
//             <h2>Bem-vindo(a) {props.nome}</h2>
//             <h3>Tenho {props.idade} anos</h3>
//         </div>
//     )
// }
const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} url={props.url} />
            <Social url={props.url}></Social>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div className="sobre">
            <h2>Olá sou o(a) {props.nome}</h2>
            <p>
                <strong>Cargo:</strong> {props.cargo}<br/>
                <strong>Idade:</strong> {props.idade}
            </p>
        </div>
    );
}

const Social = (props) => {
    return(
        <div className="social">
            <ul>
                <li><a href={props.url}>Facebook</a></li>
                <li><a href={props.url}>Twitter</a></li>
                <li><a href={props.url}>Linkedin</a></li>
            </ul>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div id='app'>
                <h1>Conheça nossa equipe</h1>
                <Equipe nome='Lucas' cargo='Programador' idade='25' url='https://www.google.com' />
            </div>
        )
    }
}
