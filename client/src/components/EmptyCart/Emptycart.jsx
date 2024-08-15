import { Link } from "react-router-dom";
import "./Emptycart.css";

function Emptycart() {
  return (
    <div className="empty-container">
      <main className="empty-content">
        <img
          src="https://img.freepik.com/free-vector/cart-basket-shopping-icons-finance_24911-45461.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user"
          alt="Empty Bag"
          className="shopping-bag"
        />
        <h2 className="empty-header">Nothing in your bag yet!</h2>
        <p className="empty-par ">
          Explore and add items to complete your shopping!
        </p>
        <button className="px-4 py-2 m-2 text-xl text-white duration-200 bg-black bg-gradient-to-r from-primary to-secondary hover:scale-105">
          <Link to="/" className="button-link">
            ADD ITEMS TO CART
          </Link>
        </button>
      </main>
    </div>
  );
}

export default Emptycart;
