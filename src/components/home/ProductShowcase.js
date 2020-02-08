import React from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'



const baseUrl = 'http://localhost:5000/products';

class ProductShowcase extends React.Component {

  constructor (props) {

    super(props);
    this.state = {productList: []};
  }
  
  componentWillMount() {
    //requisição HTTP
    axios.get(baseUrl)
      .then(response => { 
        this.setState({ productList: response.data }); 
        console.log(this.state);
    })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  
  render() {
    return (
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          <h3>Nossos Produtos!</h3>
          <hr />
          <div className="card-columns">
              {this.state.productList.map(product => <ProductCard {...product} />) }
          </div>
        </div>
      </main>  
    );
  }
}

export default ProductShowcase;