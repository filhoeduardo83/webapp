import React from 'react';
import {Link} from 'react-router-dom';
import Images from '../../assets/imgs/blazerSection/4fdfebfe.jpg'
export default class ProductCard extends React.Component {
  
  addToCart = (event) => {
    console.log('Added to cart');
  }

  render() {
    const { imageUrl, price, name, description} = this.props
    console.log({imageUrl})

    return (
      <div className="card">
        <Link to="/" className="product-details" >
          <img  src={require(`../../assets/imgs/${imageUrl}`)} className="card-img-top" alt="Pic goes here" />
        </Link>
        <div className="card-body">
          <h5 className="card-title"><strong>R${price} </strong></h5>
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> {description}</p>
          <a href="#" className="btn btn-primary">Adicionar ao carrinho</a>
        </div>
      </div>
    );
  }
}