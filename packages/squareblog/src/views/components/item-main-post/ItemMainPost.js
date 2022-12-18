import React from 'react';
import Tags from "../tags/tags";

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
                {tags.map((tag, index) => {
                    return (
                        <Tags key={index} text={tag} isSelected={false}/>
                    )
                })}
            </div>
        </section>
    );
}

export default ItemMainPost;