import React from 'react';

function ItemCard({title,category, date, description, link}) {
    return (
        <div>
            <div>
                <p>{category}</p>
            </div>
            <div>
                <h3></h3>
            </div>
        </div>
    );
}

export default ItemCard;