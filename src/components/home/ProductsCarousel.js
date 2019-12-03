import React from 'react';
import ProductCard from './ProductCard';


export default class ProductCarousel extends React.Component{
  
  render() {
    return (
      <main className="content container-fluid">
        <div className="p-3 mt-3">
         <h3> {this.props.title} </h3>
         <hr />
         <div className="carousel slide" data-ride="carousel">
            
         </div>
        </div>    
      </main>
    );
  }
}