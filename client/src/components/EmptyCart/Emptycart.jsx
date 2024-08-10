import "./Emptycart.css";

function Emptycart() {
  return (
    <div className="container">
      <main className="content">
        <img
          src="https://img.freepik.com/free-vector/cart-basket-shopping-icons-finance_24911-45461.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user"
          alt="Empty Bag"
          className="shopping-bag"
        />
        <h2>Nothing in your bag yet!</h2>
        <p>Explore and add items to complete your shopping!</p>
        <button className="add-button">
          <a href="/" className="button-link">
            ADD ITEMS FROM CART
          </a>
        </button>
      </main>
    </div>
  );
}

export default Emptycart;
