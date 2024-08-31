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
        <p className="empty-par">
          Explore and add items to complete your shopping!
        </p>
        <Link to="/" className="button-link">
          <button className="add-button">
            ADD ITEMS TO CART
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Emptycart;
