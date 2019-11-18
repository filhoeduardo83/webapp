import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    title: 'Maccommerce',
    // title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}


const baseUrl = 'http://localhost:7000/customers'
const initialState = {
    customer: { name:'', email:'', tipoPessoa:'PF', cep:'', endereco:'', username: '', password: ''},
    list: []
}


export default class CustomerCrud extends Component {
    
    state = {...initialState}

    componentWillMount() {
        axios['get'](baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }

    clear() {
        this.setState({ customer: initialState.customer})
    }

    save () {
        const customer = this.state.customer
        const method = 'post'
        const url = customer.id ? `${baseUrl}/${customer.id}` : baseUrl
        axios[method](url, customer)
            .then (resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ customer: initialState.customer, list})
            })
    }

    updateField(event) {
        const customer = {...this.state.customer}
        customer[event.target.name] = event.target.value
        this.setState({ customer })
    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="from-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.customer.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome" />
                         </div>
                     </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.customer.username}
                                onChange={ e => this.updateField(e)}
                                placeholder="Digite o email" />
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={ e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secundary ml-2"
                            onClick={ e => this.getUpdatedList(e)}>
                            Atualizar Lista
                        
                        </button>
                        <button className="btn btn-secundary ml-2"
                            onClick={ e => this.clear(e)}>
                            Cancelar
                        </button>


                    </div>
                </div>
                
            </div>
        )
    }

    getUpdatedList(customer){
        axios['get'](baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }

    load(customer) {
        this.setState({ customer })
    }

    remove(customer) {
        axios.delete(`${baseUrl}/${customer.id}`).then(resp => {
            const list = this.state.list.filter(u => u !==customer)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Username</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
        )
    }

    renderRows() {
            if(!this.state.list){
                return "Nenhum registro encontrado"
            }else{
                return this.state.list.map(customer => {
                    return (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.username}</td>
                            <td>
                                <button className="btn btn-warning"
                                    onClick={() => this.load(customer)}>
                                    <i className="fa fa-pencil" />
                                </button>
                                <button className="btn btn-danger ml-2"
                                    onClick={() => this.remove(customer)}>
                                    <i className="fa fa-trash" />
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            
    }

    render () {
        return (
            <Main {...headerProps}>
                <h3>Cadastro Administrativo de usuários: Incluir, Listar, Alterar e Excluir</h3>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        ) 
    }
}
//TODO
///FALTA CORRIGIR A INCLUSÃO DE USUÁRIO COM SENHA E ROLE