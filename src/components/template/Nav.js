import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div className="menu-area">
        <div className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/login">
                <i className="fa fa-user"></i> Login
            </Link>
            <Link to="/register">
                <i className="fa fa-address-card-o"></i> Registre-se
            </Link>
            <Link to="/cart">
                <i className="fa fa-shopping-cart"></i> Carrinho
            </Link>
        </div>
    </div>