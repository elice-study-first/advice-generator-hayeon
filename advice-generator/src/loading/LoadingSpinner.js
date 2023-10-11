import Spinner from "../images/Spinner-1s-80px.gif";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <p className="loading-spinner-message">Loading...</p>
            <img src={Spinner} alt="로딩 애니메이션"></img>
        </div>
    );
};

export { LoadingSpinner };
