import React from "react";

function Stats(props) {
    return (
                    <div className="mx-12">
                        <h3 className="pt-12 pb-6 text-3xl font-bold text-center text-white">{props.title}</h3>
                        <p className="text-center text-white">{props.stats}</p>
                    </div>
    );
}

export default Stats;