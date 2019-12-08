import React, { useState }  from 'react'
import './Login.css'
import Main from '../template/Main'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from "../../context/Auth";

const headerProps = {
    title: 'Maccommerce',
    //subtitle: 'Informe suas credenciais'
}

const baseUrl = 'http://localhost:8000/authenticate'

const initialState = {
    user: { username: '', password: '' },
}

//const [isLoggedIn, setLoggedIn] = useState(false)
//const { setAuthTokens } = useAuth();


export default class Login extends React.Component {

    state = { ...initialState }

    
    clear() {
        this.setState({ user: initialState.user })
    }

    save (e) {
        e.preventDefault()
                
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                console.log(user)
                console.log(resp.data) 
                if((resp.status_code = 200)){
                    //setAuthTokens(resp.data);
                    //setLoggedIn(true);
                    this.props.history.push("/");
                    console.log("Login realizado com sucesso!!!")
                    alert("Login realizado com sucesso!!!")
                }else{
                    console.log("Opa algo deu errado no login!!!")
                    alert("Opa algo deu errado no login!!!"+ resp.data)
                }
            }).catch((error) => {
                    console.log(error)
                    alert("Credenciais inválidas")
            })
            this.setState({ user: initialState.user })
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
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
