import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import SaleCard from './SaleCard';


export default class ProductCarousel extends React.Component{
  
  render() {
    return (
      <main className="content container-fluid">
        <div className="p-3 mt-3">
         <h3> {this.props.title} </h3>
         <hr />
        <Carousel style={{height: `320px`}}>
          {
            this.props.promos
            .map(promo => <Carousel.Item> <SaleCard {...promo} /> </Carousel.Item>  )
          }
        </Carousel>
        </div>
      </main>
    );
  }
}