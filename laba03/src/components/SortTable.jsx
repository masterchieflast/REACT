import React, {useState} from 'react';

const SortTable = () => {
    const FoodList1 = [{
        Name: "Butter", Price: 0.9, Stock: 77,
    }, {
        Name: "Milk", Price: 1.9, Stock: 45,
    },]
    const FoodList2 = [{
        Name: "Butter", Price: 0.9, Stock: 77,
    }, {
        Name: "Yoghurt", Price: 2.4, Stock: 12,
    }, {
        Name: "Milk", Price: 1.9, Stock: 45,
    }, {
        Name: "Pasta", Price: 3.2, Stock: 24,
    }, {
        Name: "Bread", Price: 2.9, Stock: 11,
    },]
    const FoodList3 = []

    let [FoodList, setFoodList] = useState(FoodList2);

    let [SortName, setSortName] = useState(false);
    let [SortPrice, setSortPrice] = useState(false);
    let [SortStock, setSortStock] = useState(false);

    //для обратной сортировки
    let [SortName2, setSortName2] = useState(false);
    let [SortPrice2, setSortPrice2] = useState(false);
    let [SortStock2, setSortStock2] = useState(false);

    let [kolor, setkolor] = useState({backgroundColor: "coral"});

    if(FoodList.length < 3){
        kolor = ({backgroundColor: "Yellow",})
    }

    function Table() {


        if (SortName) {
            setSortName(false)
            FoodList.sort(function (a, b) {
                var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });

            if (SortName2) {
                setSortName2(false)
            } else {
                setSortName2(true)
                FoodList.reverse()
            }
        }

        if (SortPrice) {
            setSortPrice(false)
            FoodList.sort(function (a, b) {
                return a.Price - b.Price;
            });

            if (SortPrice2) {
                setSortPrice2(false)
            } else {
                setSortPrice2(true)
                FoodList.reverse()
            }
        }

        if (SortStock) {
            setSortStock(false)
            FoodList.sort(function (a, b) {
                return a.Stock - b.Stock;
            });

            if (SortStock2) {
                setSortStock2(false)
            } else {
                setSortStock2(true)
                FoodList.reverse()
            }
        }


        return (<div className="foodTable">
                <table style={kolor}>
                    {FoodList.map((food) => <>
                        <tr>{food.Name}</tr>
                        <tr>{food.Price}</tr>
                        <tr>{food.Stock}</tr>
                    </>)}
                </table>
            </div>)

    }

    return (<div>
            <form action="">
                <input
                    type="text"
                    value="Name"
                    onClick={e => {
                        setSortName(true)
                    }}
                    readOnly
                />
                <input
                    type="text"
                    value="Price"
                    onClick={e1 => {
                        setSortPrice(true)
                    }}
                    readOnly
                />
                <input
                    type="text"
                    value="In Stock"
                    onClick={e2 => {
                        setSortStock(true)
                    }}
                    readOnly
                />
            </form>
            {Table()}
        </div>);
};

export default SortTable;