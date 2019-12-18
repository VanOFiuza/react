import React, { Component } from 'react';

export class ListCurso extends Component {



    exibirLinhas = () => {
        //retorna a lista de props se existir
        const cursos = this.props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td><button className="btn btn-danger  ml-3"
                    onClick={() => this.props.removerCurso(curso)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                </td>
                <button className="btn btn-success  mt-3"
                    onClick={() => this.props.consultarCurso(curso)}>
                    <i className="fa fa-check"></i>
                </button>
            </tr>
        ));
    }


    render() {
        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}