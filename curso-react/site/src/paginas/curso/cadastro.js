import React, { Component } from 'react';
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = "http://localhost:3200/api/cursos"

export class CadastroCurso extends Component {

    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'

    }

    state = { ... this.initialState, cursos: [] }
    constructor(props) {
        super(props)
        this.listar()
    }



    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}
                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}
                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}
                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}

                        adicionar={this.adicionar.bind(this)}
                        isAtualizar={this.state._id ? true : false}
                        limpar={this.limpar.bind(this)}

                    />
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos}
                        removerCurso={this.removerCurso.bind(this)}
                        consultarCurso={this.consultarCurso.bind(this)}
                    />

                </div>
            </div>
        )
    }

    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }
    limpar(evento) {
        evento.preventDefault()
        this.setState(this.initialState)
    }
    codigoChange(e) {
        this.setState({ codigo: e.target.value })
    }
    descricaoChange(e) {
        this.setState({ descricao: e.target.value })
    }
    cargaHorariaChange(e) {
        this.setState({ cargaHoraria: e.target.value })
    }
    precoChange(e) {
        this.setState({ preco: e.target.value })
    }
    categoriaChange(e) {
        this.setState({ categoria: e.target.value })
    }
    adicionar(evento) {
        evento.preventDefault()

        const { _id, codigo, descricao, cargaHoraria, categoria, preco } = this.state;
        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco

            
        }
        if (_id) {
            axios.put(`${URL}/${_id}`, body)
                .then(response => {
                    this.listar()
                    this.limpar(evento);
                    alert("Curso Alterado")

                })
                .catch(erro => {
                    alert("Ocorreu erro ao adicionar evento")
                })

        } else {
            axios.post(URL, body)
                .then(response => {
                    this.listar()
                    this.limpar(evento);
                    alert("Curso Adicionado")

                })
                .catch(erro => {
                    alert("Ocorreu erro ao adicionar evento")
                })
        }
    }
    consultarCurso(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })

    }



    removerCurso(curso) {
        if (window.confirm('Deseja deletar o curso ?')) {
            axios.delete(`${URL}/${curso._id}`)
                .then(_ => {
                    this.listar()
                    alert("Curso Deletado")
                })
                .catch(erro => {
                    alert("Ocorreu erro ao deletar evento")
                })
        }
    }
}