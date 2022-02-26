import React from "react";

const Header = () => {
    let array = ["a","b","c","d","e","f","g","h"];
    let arr = [];

    arr.push(<div className='headerUpIn'/>);
    for(let i = 0; i < 8; i++){
        arr.push(<div className='headerUpIn'>{array[i]}</div>);
    }
    arr.push(<div/>);

    return (
        <div  className='headerUp'>
            {arr}
        </div>
    );
};

export default Header;