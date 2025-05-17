

function Card({ borough = 'Queens', bgColor }) {
    const emojis = {
        "queens" : "🌆",
        "manhattan" : "🏙️",
        "brooklyn":"🌉",
        "bronx": "🏢",
        "staten island": "🗽"
    }
    const emoji = emojis[borough.toLowerCase()] || "Loading";
    // const handleEmoji = (e) => {
    //     setEmoji(e.target.value);
    // }

    return (
        <div className="card" style={{ width: "18rem", backgroundColor: bgColor || "white" }}>
            <div className="card-body">
                <h5 className="card-title">{borough ? borough : "Queens"}</h5>
                <p className="card-text">Hello from {borough}!{emoji}</p>
           </div>
        </div>
    );
}
export default Card;