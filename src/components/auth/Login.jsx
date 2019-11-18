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
//const baseUrl = 'http://localhost:4001/users'

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
        const method = 'post'
        const url = baseUrl
        
        if (!user.username || !user.password) {
            console.log("Preencha os campos username e senha")
        }else
        axios[method](url, user)
            .then(resp => {
                console.log(user)
                console.log(resp.data) 
                console.log("Login Realizado com Sucesso") 
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
                <div className="login-page">
                    <div className="form">
                        <form className="login-form"><h1>Login</h1><p />
                            Nome de usuario:
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.user.username}
                                onChange={e => this.updateField(e)}
                                placeholder="username" />
                            Senha:
                            <input type="password" className="form-control"
                                name="password"
                                value={this.state.user.password}
                                onChange={e => this.updateField(e)}
                                placeholder="1234" />
                            
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
