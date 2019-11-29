import React from 'react'
import './Register.css'
import Main from '../template/Main'
import axios from 'axios'
import { Link } from 'react-router-dom'

const headerProps = {
    title: 'Maccommerce',
    //subtitle: 'Informe suas credenciais'
}

const baseUrlCustomer = 'http://localhost:7000/customers/'

const initialState = {
    user: { name:'', email:'', tipoPessoa:'PF', cep:'', endereco:'', username:''},
    login: {username:'', password:''}
}


export default class Register extends React.Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
        this.setState({ login: initialState.login })

    }

    save() {
        const user = this.state.user
        const login = this.state.login
        const method = 'post'
        const urlCustomer =  baseUrlCustomer

        axios[method](urlCustomer, user, login)
        .then(resp => {
            console.log(user)
            console.log(login)

            console.log(resp.data) 
        })
        this.setState({ user: initialState.user })
        this.setState({ login: initialState.login })

    }

    updateFieldUser(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    updateFieldLogin(event) {
        const login = { ...this.state.login }
        login[event.target.name] = event.target.value
        this.setState({ login })
    }

    onSubmit = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <Main  {...headerProps}>
                <div class="register-page">
                    <div class="form">
                        <form class="register-form"><h1>Novo cadastro</h1><p />
                            Nome Completo*
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateFieldUser(e)}
                                placeholder="Digite o nome completo" />
                            Email
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateFieldUser(e)}
                                placeholder="Digite o email" />
                            CEP
                            <input type="text" className="form-control"
                                name="cep"
                                value={this.state.user.cep}
                                onChange={e => this.updateFieldUser(e)}
                                placeholder="Digite o CEP" />
                            Endereço
                            <input type="text" className="form-control"
                                name="endereco"
                                value={this.state.user.endereco}
                                onChange={e => this.updateFieldUser(e)}
                                placeholder="Digite o endereço completo" />
                            Login*
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.user.username}
                                onChange={e => {
                                    this.updateFieldUser(e)
                                    this.updateFieldLogin(e)}
                                }
                                placeholder="Digite o nome de usuário" />
                            Senha*
                            <input type="password" className="form-control"
                                name="password"
                                value={this.state.login.password}
                                onChange={e => this.updateFieldLogin(e)}
                                placeholder="Digite a senha" />
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </Main>
        )
    }
}
