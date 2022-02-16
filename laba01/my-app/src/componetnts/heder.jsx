import React from "react";

const HeaderSide = () => {

    let arr = [];

    for(let i = 1; i <= 8; i++){
        arr.push(<div>{i}</div>);
    }

    return (
        <div  className="headerSide">
            {arr}
        </div>
    );
};

export default HeaderSide;
