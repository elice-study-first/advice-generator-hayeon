import "./AdviceCard.css";

import { useState } from "react";

const AdviceCard = () => {
    const [adviceNumber, setAdviceNumber] = useState(0);
    const [adviceContent, setAdviceContent] = useState("");

    const getAdvice = () => {
        fetch("https://api.adviceslip.com/advice", {
            headers: {
                Accept: "application / json",
            },
            method: "GET",
        })
            .then((data) => data.json())
            .then((data) => {
                setAdviceNumber(data.slip.id);
                setAdviceContent(data.slip.advice);
            });
    };

    return (
        <div className="advice-container">
            <span className="advice-title">{adviceNumber !== 0 && `ADVICE #${adviceNumber}`}</span>
            <p className="advice-content">{adviceContent !== "" ? `"${adviceContent}"` : "Get Advice By Click Button!"}</p>
            <img className="advice-divider" src="/images/pattern-divider-desktop.svg" alt="pattern divider"></img>
            <button className="advice-button get-new" onClick={getAdvice}></button>
        </div>
    );
};

export { AdviceCard };
