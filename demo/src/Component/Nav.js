import React, {  useEffect, useState } from 'react'

function Nav() {

    useEffect(() => {
        fetchitems();
    }, []);

    const [item, setItems] = useState([]);

    const fetchitems = async () => {
        const data = await fetch('/Nav');
        const items = await data.json();
        setItems(items);
    };


    return (
        <div>
            {
                item.map(item => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.msg}</p>
                        <p>{item.username}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Nav