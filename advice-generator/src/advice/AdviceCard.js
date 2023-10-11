import { LoadingSpinner } from "../loading/LoadingSpinner.js";
import { fetchAdviceCard } from "../server/Fetcher.js";
import "./AdviceCard.css";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AdviceCard = () => {
    const [adviceNumber, setAdviceNumber] = useState(0);
    const [adviceContent, setAdviceContent] = useState("");
    const { data, isFetching, refetch } = useQuery(["advice"], () => fetchAdviceCard(), {
        enabled: false,
    });
    const getAdvice = async () => {
        await refetch();
    };

    useEffect(() => {
        if (data) {
            localStorage.setItem(
                "advice",
                JSON.stringify({
                    number: data.slip.id,
                    content: data.slip.advice,
                })
            );
        }
        const savedAdviceData = JSON.parse(localStorage.getItem("advice"));
        if (savedAdviceData) {
            setAdviceNumber(savedAdviceData.number);
            setAdviceContent(savedAdviceData.content);
        }
    }, [data]);

    return (
        <div className="advice-container">
            {isFetching ? <LoadingSpinner></LoadingSpinner> : null}
            <span className="advice-title">{adviceNumber !== 0 && `ADVICE #${adviceNumber}`}</span>
            <p className="advice-content">{adviceContent !== "" ? `"${adviceContent}"` : "Get Advice By Click Button!"}</p>
            <img className="advice-divider" src="/images/pattern-divider-desktop.svg" alt="pattern divider"></img>
            <button className="advice-button get-new" onClick={isFetching ? null : getAdvice} disabled={isFetching ? true : false}></button>
        </div>
    );
};

export { AdviceCard };
