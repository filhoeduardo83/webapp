import React from 'react';


export default class ProductCard extends React.Component {
  
  addToCart = (event) => {
    console.log('Added to cart');
  }

  render() {
    const { price, name, description} = this.props
    
    return (
      <div className="card">
        <img src="..." className="card-img-top" alt="Pic goes here" />
        <div className="card-body">
          <h5 className="card-title"><strong>R${price} </strong></h5>
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> {description} Product's small description.</p>
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    );
  }
}