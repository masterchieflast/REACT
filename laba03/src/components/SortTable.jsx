import React, {useState} from 'react';

const SortTable = () => {
    const FoodList1 = [
        {
            Name: "Butter",
            Price: 0.9,
            Stock: 77,
        },
        {
            Name: "Milk",
            Price: 1.9,
            Stock: 45,
        },
    ]
    const FoodList2 = [
        {
            Name: "Butter",
            Price: 0.9,
            Stock: 77,
        },
        {
            Name: "Yoghurt",
            Price: 2.4,
            Stock: 12,
        },
        {
            Name: "Milk",
            Price: 1.9,
            Stock: 45,
        },
        {
            Name: "Pasta",
            Price: 3.2,
            Stock: 24,
        },
        {
            Name: "Bread",
            Price: 2.9,
            Stock: 11,
        },
    ]
    const FoodList3 = []
    let FoodList = FoodList2;

    let [SortName, setSortName] = useState(false);
    let [SortPrice, setSortPrice] = useState(false);
    let [SortStock, setSortStock] = useState(false);

    //для обратной сортировки
    let [SortName2, setSortName2] = useState(false);
    let [SortPrice2, setSortPrice2] = useState(false);
    let [SortStock2, setSortStock2] = useState(false);



    function Table() {
        if(SortName){
            setSortName(false)
            FoodList.sort(function(a, b) {
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

            if(SortName2){
                setSortName2(false)
                return(
                    <div>
                        <table>
                            {}
                        </table>
                    </div>
                )
            }else{
                setSortName2(true)
                FoodList.reverse()
            }
        }
    }

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    value="Name"
                    onClick={e => {
                        setSortName(true)
                        setSortPrice(false)
                        setSortStock(false)
                    }
                }
                    readOnly
                />
                <input
                    type="text"
                    value="Price"
                    onClick={e1 => {
                        setSortName(false)
                        setSortPrice(true)
                        setSortStock(false)

                    }
                }
                    readOnly
                />
                <input
                    type="text"
                    value="In Stock"
                    onClick={e2 => {
                        setSortName(false)
                        setSortPrice(false)
                        setSortStock(true)
                    }
                }
                    readOnly
                />
            </form>
            {Table()}
        </div>
    );
};

export default SortTable;