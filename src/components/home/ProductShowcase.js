import React from 'react';


class ProductShowcase extends React.Component {

  render() {
    return (
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          <h3>Nossos Produtos!</h3>
          <hr />
          <div className="card-columns">
            {this.props.children}
          </div>
        </div>
      </main>  
    );
  }
}

export default ProductShowcase;