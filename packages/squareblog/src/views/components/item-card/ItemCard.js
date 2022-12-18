import React from 'react';
import {Global} from "frontity";
import {style} from "./item-car-style";
import Tags from "../tags/tags";
import {Priority} from "../../../utils/constants/Constants";

function ItemCard({title,category, date, description, link}) {
    return (
        <>
            <Global styles={style} />
        <div className="item-card">
            <div className="item-card__image">
                <div className="tag-container">
                    <Tags text={category} type={Priority.PRIMARY} clickable={false} isSelected={true}/>
                </div>
            </div>
            <div className="item-card__description">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: description}}/>
                <p>{date}</p>
            </div>
        </div>
        </>
    );
}

export default ItemCard;