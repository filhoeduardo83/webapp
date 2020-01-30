import React from 'react'
import Main from '../template/Main'
import ProductCard from './ProductCard'
import ProductShowcase from './ProductShowcase';
import ProductCarousel from './ProductsCarousel'


const testData = () => {
  var tmpArray = [];

  for (var i=0; i < 9; i++) {
    tmpArray.push({
      name: 'Nice Product',
      price: 24.99,
      description: 'Cool Product here!'
    });
  }

  return tmpArray;
};

export default props =>

    <div >
      <Main title="Maccommerce">
        <div className='display-4'> Bem vindo!</div>
        <hr />
        <p className="mb-">Sistema desenvolvido como parte do trabalho final da disciplica Arquitetura de Computadores do MACC</p>
      </Main>
      <ProductCarousel 
        title="Promoções" 
        promos={testData()}
      />
      <ProductShowcase>
        <div>
          { testData().map(product => <ProductCard {...product} />) }
        </div>
      </ProductShowcase>
    </div>