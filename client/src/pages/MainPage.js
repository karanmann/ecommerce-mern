import Product from "../components/Product.js";
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
          return (
            <Product key={product._id} product={product}/>
          );
        })}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
};

export default MainPage;
