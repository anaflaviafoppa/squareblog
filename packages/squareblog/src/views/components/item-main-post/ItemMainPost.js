import React from 'react';
import Tags from "../tags/tags";
import {Global} from "frontity"
import {style} from "./item-main-post-style";
import {ORDER} from "../../../utils/constants/Constants";


function ItemMainPost({title,category, date, description, tags, image,link, order}) {
    const className = order === ORDER.NORMAL ? 'item-main' : 'item-main item-main__revert';
    return (
        <>
            <Global styles={style}/>
        <section className={className}>
            <div className="item-main__content container">
                <div className="title-border-container">
                    <div className="title-border">
                        <h3>{category}</h3>
                    </div>
                    <p>{date}</p>
                </div>
                <div className="item-main__description">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div>
                    {tags.map((tag, index) => {
                        return (
                            <Tags key={index} text={tag} isSelected={false}/>
                        )
                    })}
                </div>
            </div>
            <div className="item-main__image">

            </div>
        </section>
        </>
    );
}

export default ItemMainPost;