import React from 'react'
import './Register.css'
import Main from '../template/Main'
import axios from 'axios'
import { Link } from 'react-router-dom'

const headerProps = {
    title: 'Maccommerce',
    //subtitle: 'Informe suas credenciais'
}

const baseUrlLogin = 'http://localhost:8000/register/1003'
const baseUrlCustomer = 'http://localhost:7000/customers/'

const initialState = {
    user: { name:'', email:'', tipoPessoa:'PF', cep:'', endereco:'', username: '', password: ''}
}


export default class Register extends React.Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }1

    save() {
        const user = this.state.user
        const method = 'post'
        const urlLogin = baseUrlLogin
        const urlCustomer =  baseUrlCustomer
        if (!user.username || !user.password || !user.name) {
            console.log("Preencha os campos obrigatórios para se cadastrar")
        }else{
            axios[method](urlLogin, user)
            .then(resp => {
                console.log(user)
                console.log(resp.data) 
                console.log("Cadastro realizado com sucesso!!!")

            })

            
            axios[method](urlCustomer, user)
            .then(resp => {
                console.log(user)
                console.log(resp.data) 
            })
            this.setState({ user: initialState.user })
        }
        
       
        }


            

    

    // handleSignUp = async e => {
    //     e.preventDefault();
    //     const { username, email, password } = this.state;
    //     if (!username || !email || !password) {
    //       this.setState({ error: "Preencha todos os dados para se cadastrar" });
    //     } else {
    //       try {
    //         await api.post("/users", { username, email, password });
    //         this.props.history.push("/");
    //       } catch (err) {
    //         console.log(err);
    //         this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
    //       }
    //     }
    //   };



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
                <div className="register-page">
                    <div className="form">
                        <form className="register-form"><h1>Novo cadastro</h1><p />
                            Nome Completo
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome completo" />
                            Email
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email" />
                            CEP
                            <input type="text" className="form-control"
                                name="cep"
                                value={this.state.user.cep}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o CEP" />
                            Endereço
                            <input type="text" className="form-control"
                                name="endereco"
                                value={this.state.user.endereco}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o endereço completo" />
                            Login
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.user.username}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome de usuário" />
                            Senha:
                            <input type="password" className="form-control"
                                name="password"
                                value={this.state.user.password}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a senha" />
                            <button className="btn btn-primary mt-3"
                                onClick={e => this.save(e)}>
                                Registrar
                            </button>
                            <p className="message">Já possui cadastro? <Link to="/login">Realize seu login</Link></p>
                        </form>
                    </div>
                </div>
            </Main>
        )
    }
}
