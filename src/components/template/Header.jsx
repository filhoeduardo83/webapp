import './Header.css'
import Logo from './Logo'

import React from 'react'

export default props =>
<div className="bar">
    <div className= "top">
        Compre hoje e ganhe frete grátis em compras acima de 100 reais !
    </div>

    <div className="content">
         <Logo />
        <div className="maccommerce">
            <h1>                
               <strong>Maccommerce</strong>
            </h1>
        </div>
    </div>

</div>
