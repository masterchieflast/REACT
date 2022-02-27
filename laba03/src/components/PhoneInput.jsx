import React, {useState} from 'react';

const PhoneInput = () => {
    const NumArray = [
        {
            operator: ["МТС", "A1", "life:)"],
            value: "Беларусь",
            code: "+375",
            img: "https://img5.goodfon.ru/original/1920x1408/8/f1/belarus-belar..",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            operator: ["Билайн", "Мегафон", "МТС", "Tele2"],
            value: "Россия",
            code: "+7",
            img: "https://yulianovozhilova.ru/wp/wp-content/uploads/2019/05/фла..",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
        {
            operator: ["Lifecell", "Vodafone", "Київстар"],
            value: "Украина",
            code: "+380",
            img: "https://pbs.twimg.com/media/D54wHWcW0AYRv9g.jpg:large",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            operator: ["Orange", "Play", "Plus", "T-mobile"],
            value: "Польша",
            code: "+48",
            //img: "https://yulianovozhilova.ru/wp/wp-content/uploads/2019/05/фла..",
            mask: "XXX XXX-XXX-XXX",
            count: 12,
        },
        {
            operator: ["Telia", "Bite", "Tele2"],
            value: "Литва",
            code: "+370",
            //img: "https://yulianovozhilova.ru/wp/wp-content/uploads/2019/05/фла..",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 12,
        },
        {
            operator: ["LMT", "Tele2", "Bite"],
            value: "Латвия",
            code: "+371",
            //img: "https://yulianovozhilova.ru/wp/wp-content/uploads/2019/05/фла..",
            mask: "XXXX XXXX-XXXX",
            count: 12,
        },
    ];

    let [Select, setSelect] = useState("+375");
    let [Check, setCheck] = useState(false);
    let [id, setId] = useState(0);

    const lest = NumArray.map((num) => <input
        type="text"
        onClick={e => setSelect(num.code)}
        value={num.value}
        key={num.value}
        readOnly/>)

    function f() {
        Select.toString()
        for (let i = 0; i < NumArray.length; i++) {
            if (Select[0] + Select[1] === NumArray[i].code || Select[0] + Select[1] + Select[2] === NumArray[i].code || Select[0] + Select[1] + Select[2] + Select[3] === NumArray[i].code) {
                if (Select.length === NumArray[i].count) {
                    let x = NumArray[i].mask;
                    for (let j = 0, k = 0; j < x.length; j++) {
                        if (x[j] === "X") {
                            x = x.replace("X", Select[k])
                            k++;
                        }
                    }
                    setId(i);
                    setSelect(x)
                }
            }
        }

        let lest1 = [];
        for (let i = 0; i < NumArray[id].operator.length; i++) {
            lest1.push(
                <input
                    type="text"
                    //onClick={e => setSelect(num.code)}
                    value={NumArray[id].operator[i]}
                    //key={num.value}
                    readOnly/>
            )
        }

        if (Check) {
            return (
                <div className="lest">
                    <form>
                        {lest}
                    </form>
                </div>
            )
        } else {
            return (
                <div className="lest">
                    <form>{lest1}</form>
                </div>
            )
        }
    }

    return (
        <div>
            <form action="">
                <input
                    className="fff"
                    type="text"
                    value="&#127757;"
                />
                <input
                    className="mainIn"
                    type="text"
                    maxLength={14}
                    value={Select}
                    onChange={e => setSelect(e.target.value)}
                    onClick={e1 => setCheck(!Check)}
                />
            </form>
            {f()}
        </div>);
};

export default PhoneInput;