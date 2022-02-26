import React, {useState} from 'react';
import Miner from "./Miner";
import Format from "./Format";

const JobList = (props) => {

    let [cheak, setsCheak] = useState(true);
    let kolor = {color: "red"}
    let Cheak = true;



    return (
        <div className="JobIn">
            <label><input
                type="checkbox"
                className="custom-checkbox"
                onChange={e => setsCheak(!cheak)}
            />
            <br/>
                <Miner >{props.children}{cheak}</Miner></label>
        </div>
    );
};

export default JobList;