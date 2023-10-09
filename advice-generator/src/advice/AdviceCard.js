import "./AdviceCard.css";

const AdviceCard = () => {
    return (
        <div className="advice-container">
            <span className="advice-title">ADVICE #117</span>
            <p className="advice-content">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
            <img className="advice-divider" src="/images/pattern-divider-desktop.svg" alt="pattern divider"></img>
            <button className="advice-button get-new"></button>
        </div>
    );
};

export { AdviceCard };
