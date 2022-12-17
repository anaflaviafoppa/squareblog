import React from 'react';
import Tags from "../tags/tags";
import {stringToHTML} from "../../../utils/functions/functions";

function ItemMainPost({title,category, date, description, tags, image,link, order}) {
    return (
        <section>
            <div>
                <h3>{category}</h3>
                <p>{date}</p>
            </div>
            <div>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            <div>
                {tags.map((tag) => {
                    return (
                        <Tags text={tag} isSelected={false}/>
                    )
                })}
            </div>
        </section>
    );
}

export default ItemMainPost;