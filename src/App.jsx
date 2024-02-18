import React, { useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

  
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName) => {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { name: productName, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    const updatedCart = cartItems.map(item =>
      item.name === productName ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );

    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setCartItems(filteredCart);
  };

  const isItemInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="button">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{totalQuantity}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Product Cards */}
            {/* Repeat the following block for each product */}
            {products.map((product, index) => (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  {/* Product image */}
                  <img className="card-img-top" src={product.image} alt="..." />
                  {/* Product details */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name */}
                      <h5 className="fw-bolder">{product.name}</h5>
                      {/* Product price */}
                      {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
                      {product.reviews && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="bi-star-fill"></div>
                          ))}
                        </div>
                      )}
                      <span className="text-muted text-decoration-line-through">{product.discountedPrice}</span>
                      {product.discountedPrice}
                    </div>
                  </div>
                  {/* Product actions */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {isItemInCart(product.name) ? (
                        <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product.name)}>
                          Remove from cart
                        </button>
                      ) : (
                        <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product.name)}>
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

// Product data
const products = [
  {
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00 - $80.00',
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$18.00',
    sale: true,
    reviews: true,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$25.00',
    sale: true,
  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00',
    reviews: true,
  },
  {
    name: 'Sale Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$25.00',
    sale: true,
  },
  {
    name: 'Fancy Products',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$120.00 - $280.00',
  },
  {
    name: 'Special Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$18.00',
    sale: true,
    reviews: true,
  },
  {
    name: 'Popular Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00',
    reviews: true,
  },
];

export default App;
