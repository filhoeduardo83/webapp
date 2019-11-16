import React from 'react'
import './Register.css'
import Main from '../template/Main'
import axios from 'axios'
import { Link } from 'react-router-dom'

const headerProps = {
    title: 'Maccommerce',
    //subtitle: 'Informe suas credenciais'
}

const baseUrl = 'http://localhost:8000/register/1003'
// const baseUrl = 'http://localhost:4001/users'

const initialState = {
    user: { username: '', password: ''}
}


export default class Register extends React.Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                console.log(resp.data) 
                this.setState({ user: initialState.user })
            })
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    onSubmit = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <Main  {...headerProps}>
                <div class="register-page">
                    <div class="form">
                        <form class="register-form">Informe as novas credenciais:<p />
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.user.username}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome" />
                            <input type="password" className="form-control"
                                name="password"
                                value={this.state.user.password}
                                onChange={e => this.updateField(e)}
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
