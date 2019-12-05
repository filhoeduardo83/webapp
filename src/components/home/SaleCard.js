import React from 'react';


export default class SaleCard extends React.Component {
  
  addToCart = (event) => {
    console.log('Added to cart');
  }

  render() {
    const { price, name, description} = this.props
    
    return (

        <div className="card text-center" style={{height: `300px`}}>
          <div className="card-header">
            Christmas Sale!!
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <h5 className="card-title"><strong>R${price} </strong></h5>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
          <div className="card-footer text-muted">
            Only <strong>2</strong> left!!!
          </div>
        </div>
    );
  }
}