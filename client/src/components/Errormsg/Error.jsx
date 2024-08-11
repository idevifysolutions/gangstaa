import './error.css';

const Error = () => {
    return (
        <div className="not-found-container">
            <h1 className="error-title">OH NO!</h1>
            <p className="error-message">We could not find that page</p>
            <p className="suggestion">
                Try searching or go to <a href="/" className="home-link">Gangstaa home page.</a>
            </p>
            <div className="err-container">
                <img 
                    src="https://st2.depositphotos.com/3489481/6371/i/380/depositphotos_63717537-stock-photo-clueless-man-arms-out-asking.jpg" 
                    alt="gangsta" 
                    className="err-image" 
                />
            </div>
        </div>
    );
};

export default Error;
