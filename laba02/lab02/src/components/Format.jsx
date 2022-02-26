import React, {useRef, useState} from 'react';
import MyButton from "./MyButton";
import MyInput from "./input/MyInput";
import Datee from "./Datee";

const Format = (props) => {

    let [format, setFormats] = useState();
    let [time, setTime] = useState(0);
    const BodyInputRef = useRef();

    const addFormat = (e) => {
        console.log(format)
        console.log(time)
    }
/*
    const changeFormat1 = () => {
        format = true;
        date = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    }

    const changeFormat2 = () => {
        format = false;
    }
*/

    return (
        <div>
            <form>
                <MyInput
                    value={format}
                    onChange={e => setFormats(e.target.value)}
                    type="text"
                    itemID="format"
                    name="subscribe"
                    placeholder="Format(12 or 24)"
                />
            <br/>
            <MyInput
                value={time}
                onChange={e => setTime(e.target.value)}
                type="number"
                placeholder="timezone"
                min="-12"
                max="+12"/>
            <br/>
            </form>
            <Datee>{format}{time}</Datee>

        </div>
    );
};

export default Format;