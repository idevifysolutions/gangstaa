import "./error.css";

const Error = () => {
  return (
    <div className="not-found-container">
      <div className="err-container">
        <img
          src="https://st2.depositphotos.com/3489481/6371/i/380/depositphotos_63717537-stock-photo-clueless-man-arms-out-asking.jpg"
          alt="gangsta"
          className="err-image"
        />
      </div>
      <div className="text-container">
        <div className="error-title">
          <div className="lottie-container">
            <iframe
              src="https://lottie.host/embed/2c62d1f9-4528-4166-b749-28a0421432e9/QnsOItkfGW.json"
              className="lottie-animation"
            ></iframe>
          </div>
          OH NO!
        </div>
        <p className="error-message">We could not find that page</p>
        <p className="suggestion">
          Try searching or go to{" "}
          <a href="/" className="home-link">
            Gangstaa home page.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
