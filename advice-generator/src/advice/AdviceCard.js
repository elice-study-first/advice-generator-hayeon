import { LoadingSpinner } from "../loading/LoadingSpinner.js";
import "./AdviceCard.css";

import { useEffect, useState } from "react";

const AdviceCard = () => {
    const [adviceNumber, setAdviceNumber] = useState(0);
    const [adviceContent, setAdviceContent] = useState("");
    const [loading, setLoading] = useState(false);

    const getAdvice = () => {
        setLoading(true);
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
                localStorage.setItem(
                    "advice",
                    JSON.stringify({
                        number: data.slip.id,
                        content: data.slip.advice,
                    })
                );
                setLoading(false);
            });
    };

    useEffect(() => {
        const savedAdviceData = JSON.parse(localStorage.getItem("advice"));
        if (savedAdviceData) {
            setAdviceNumber(savedAdviceData.number);
            setAdviceContent(savedAdviceData.content);
        }
    }, []);

    return (
        <div className="advice-container">
            {loading ? <LoadingSpinner></LoadingSpinner> : null}
            <span className="advice-title">{adviceNumber !== 0 && `ADVICE #${adviceNumber}`}</span>
            <p className="advice-content">{adviceContent !== "" ? `"${adviceContent}"` : "Get Advice By Click Button!"}</p>
            <img className="advice-divider" src="/images/pattern-divider-desktop.svg" alt="pattern divider"></img>
            <button className="advice-button get-new" onClick={getAdvice}></button>
        </div>
    );
};

export { AdviceCard };
