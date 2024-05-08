import React, { useState, useMemo, useEffect } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {

    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    const [theme, setTheme] = useState(1);

    function amountSpent(items){

        let cost=0;
        items.map((item,)=>{
            cost += Number(item.value);
        })
        console.log("Cost computed was "+ cost);
        return cost;
        
    }

    useEffect(() => {
        console.log('Items updated');
    }, [items]);

    useEffect(() => {
        console.log('Theme updated');
        document.body.style.backgroundColor = theme === 0 ? 'white' : 'black';
    }, [theme]);

    // Your code starts here
    let totalValue = useMemo(()=>amountSpent(items),[items])
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
            <div>
                <button onClick={() => setTheme(
                    (prevTheme) => (prevTheme === 0 ? 1 : 0) )
                }>Change Theme</button>
                <p>Theme: {theme}</p>
            </div>
        </div>
    );
};
