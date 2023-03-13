import React from "react";

function BoardMembers(props) {
    return (
        <>
             <div>
                                    <img
                                        className="w-16 mr-5 float-left"
                                        src={props.img}
                                        width={64}
                                        alt="Board member Paul Murphy"
                                    />
                                    <p className="font-semibold mb-1.5">{props.name}</p>
                                    <p className="text-base">{props.title}</p>
                                    <p className="font-light leading-5 pt-5">
                                       {props.bio}
                                        <br />
                                        <br />
                                        {props.bioTwo}
                                    </p>
                                </div>
        </>
    );
}

export default BoardMembers;