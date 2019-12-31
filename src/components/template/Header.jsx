import './Header.css'
import Logo from './Logo'

import React from 'react'

export default props =>
    <div className="bar">
        <Logo />
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon}`}></i> <strong>Maccommerce</strong>
            </h1>
        </header>
    </div>
