import React from 'react';

const Miner = (props) => {
    const arrayLink = ["wiki", "first google link", "Job", "location", "equipment", "training", "testing"]
    if (props.children[1]) {
        return (
            <div>
                <h2>{props.children[0]}</h2>
            </div>
        );
    } else {
            const array = ["https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%85%D1%82%D1%91%D1%80", "https://edunews.ru/professii/obzor/tehnicheskie/shahter.html", "https://rabota.by/search/vacancy?search_field=name&search_field=company_name&search_field=description&text=%D0%A8%D0%B0%D1%85%D1%82%D1%91%D1%80&from=suggest_post", "https://www.jaguarmining.com/", "https://www.21vek.by/hammers/1088613/", "https://www.360training.com/course/msha-new-miner-training", "https://www.dtek.com/shakhtertest/"]
            let l = 0;
            return (
                <div>
                    <h2>{props.children[0]}</h2>
                    <ul>{
                        array.map((array,) =>
                            <li><a href={array}>{arrayLink[l++]}</a></li>)
                    }</ul>
                </div>
            )
        //}
    }
};

export default Miner;