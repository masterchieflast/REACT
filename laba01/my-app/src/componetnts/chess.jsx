import React from "react";

const Chess = () => {
    let array = [8];
    for (let i = 0; i < 8; i++) {
        array[i] = [8];

        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                array[i][j] = (<div className="ChessWhite"/>)
            } else {
                array[i][j] = (<div className="ChessBlack"/>)
            }
        }
    }

    return (
        <div className="Chess">
            {(array)}
        </div>
    );
};

export default Chess;