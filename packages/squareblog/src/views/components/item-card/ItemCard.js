import React from 'react';
import {Global} from "frontity";
import {style} from "./item-car-style";

function ItemCard({title,category, date, description, link}) {
    return (
        <>
            <Global styles={style} />
        <div className="item-card">
            <div>
                <p>{category}</p>
            </div>
            <div>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: description}}/>
                <p>{date}</p>
            </div>
        </div>
        </>
    );
}

export default ItemCard;