import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    title: 'Maccommerce',
}


const url = 'http://localhost:7000/cart'
const initialState = {
    product: { name:'', price:''},
    list: []
}





export default class Cart extends Component {
    
    state = {...initialState}

    componentWillMount() {
        axios(url).then(resp => {
            this.setState({ list: resp.data})
        })
    }

    clear() {
        this.setState({ product: initialState.product})
    }

    save () {
        const product = this.state.product

        axios.put(url, product)
            .then (resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ product: initialState.product, list})
            })
    }

    updateField(event) {
        const product = {...this.state.product}
        product[event.target.name] = event.target.value
        this.setState({ product })
    }

    renderForm() {
        return (
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={ e => this.updateField(e)}>
                            Finalizar Compra
                        </button>
                       
                        <button className="btn btn-primary ml-2"
                            onClick={ e => this.save(e)}>
                            Continuar comprando
                        </button>

                        <button className="btn btn-primary ml-2"
                            onClick={ e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
                
        )
    }

    getUpdatedList(product){
        const list = this.state.list.filter(u => u.id !==product.id)
        list.unshift(product)
        return list
    }

    load(product) {
        this.setState({ product })
    }

    remove(product) {
        axios.delete(`${url}/${product.id}`).then(resp => {
            const list = this.state.list.filter(u => u !==product)
            this.setState({ list })
        })



        ///////---->>>>EXEMPLO BASE PARA USAR O TOKEN EM REQUISIÇÕES PROTEGIDAS
        // const product_TOKEN = localStorage.getItem('token')
        // const AuthStr = 'Bearer '.concat(product_TOKEN)
        // const URL = 'http://localhost:8080/me'

        // axios
        // .get(URL, 
        //     { headers: { Authorization: AuthStr } })
        // .then(response => {
        //             // If request is good...
        //             console.log(response.data)
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })


    }

    renderTable() {
        return (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>     Nome</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
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
            return this.state.list.map(product => {
                return (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.email}</td>
                        <td>
                            <button className="btn btn-warning"
                                onClick={() => this.load(product)}>
                                <i className="fa fa-pencil" />
                            </button>
                            <button className="btn btn-danger ml-2"
                                onClick={() => this.remove(product)}>
                                <i className="fa fa-trash" />
                            </button>
                        </td>
                    </tr>
                )
            })
    }

    render () {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        ) 
    }
}