import React from 'react';

const Datee = (props) => {
    let date;
    if (parseInt(props.children[0]) === 12) {
        date = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
        date = date.toString()
        date = (Math.abs((parseFloat(date) + parseFloat(props.children[1]) - 3)) % 12) + date[1] + date[2] + date[3] + date[4] + date[5] + date[6]

    } else {
        date = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: false});
        date = date.toString()
        date = (Math.abs((parseFloat(date) + parseFloat(props.children[1]) - 3)) % 24) + date[2] + date[3] + date[4]
    }


    return (
        <div>
            {date}
        </div>
    );
};

export default Datee;