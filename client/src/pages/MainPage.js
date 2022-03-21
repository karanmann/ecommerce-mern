import data from "../data/data.js";

const MainPage = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            BUILD MORE
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
        {data.products.map(product => {
          console.log(product)
          const {name, image, price, _id}=product
          return (
            <div key={_id} className="row center">
              <div className="card">
                <a href="product.html">
                  <img className="medium" src={image} alt="product" />
                </a>
                <div className="card-body">
                  <a href="product.html">
                    <h2>{name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div>
                    <p className="price">Price: €{price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
};

export default MainPage;
