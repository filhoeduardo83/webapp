import React from 'react'
import './Login.css'
import Main from '../template/Main'




export default class Login extends React.Component {

    onSubmit = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <Main title="Informe suas credenciais">
                    <div class="login-page">
                        <div class="form">
                            <form class="register-form">
                                <input type="text" placeholder="name"/>
                                <input type="password" placeholder="password"/>
                                <input type="text" placeholder="userName"/>
                                <button>create</button>
                                <p class="message">Já registrado? <a href="#">Sign In</a></p>
                            </form>
                            <form class="login-form">
                                <input type="text" placeholder="username"/>
                                <input type="password" placeholder="password"/>
                                <button>login</button>
                                <p class="message">Não registado? <a href="#">Crie uma conta</a></p>
                            </form>
                        </div>
                    </div>                  
                </Main>
            </div>
        )
    }
}
