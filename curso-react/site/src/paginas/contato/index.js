import React from 'react';
import { Cabecalho } from '../../componentes/componentes';
import  ContatoForm  from './form';

import {connect} from 'react-redux'

class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={` Quer enviar o email - ${this.props.nome}`} />
                <ContatoForm />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    nome : store.contato.nome
}) 

export default connect(mapStateToProps)(ContatoIndex)