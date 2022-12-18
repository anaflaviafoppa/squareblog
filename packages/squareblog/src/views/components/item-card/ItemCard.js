import React from 'react';

function ItemCard({title,category, date, description, link}) {
    return (
        <div>
            <div>
                <p>{category}</p>
            </div>
            <div>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: description}}/>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default ItemCard;