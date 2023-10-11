export const fetchAdviceCard = () => {
    const result = fetch("https://api.adviceslip.com/advice", {
        headers: {
            Accept: "application / json",
        },
        method: "GET",
    }).then((data) => data.json());

    return result;
};
