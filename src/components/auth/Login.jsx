import React from 'react'
import './Login.css'
import Main from '../template/Main'
import axios from 'axios'
import { Link } from 'react-router-dom'

const headerProps = {
    title: 'Maccommerce',
    //subtitle: 'Informe suas credenciais'
}

const baseUrl = 'http://localhost:8000/authenticate'
// const baseUrl = 'http://localhost:4001/users'

const initialState = {
    user: { username: '', password: '' },
}


export default class Login extends React.Component {

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
                <div class="login-page">
                    <div class="form">
                        {/* <form class="register-form">
                            <input type="text" placeholder="name"/>
                            <input type="password" placeholder="password"/>
                            <input type="text" placeholder="userName"/>
                            <button>create</button>
                            <p class="message">Já registrado? <a href="#">Sign In</a></p>
                        </form> */}
                        <form class="login-form">Informe suas credenciais:<p />
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
                                    Login
                                </button>
                            <p className="message">Não registado? <Link to="/register">Crie uma conta</Link></p>
                        </form>
                    </div>
                </div>
            </Main>
        )
    }
}
