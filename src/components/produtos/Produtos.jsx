import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    title: 'Produtos',
    subtitle: 'Realize suas compras!'
}


const baseUrl = 'http://localhost:3001/produtos'

export default class Produtos extends Component {
    render () {
        return (
            <Main {...headerProps}>
            </Main>
        ) 
    }
}