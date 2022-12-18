import React from 'react';
import {Priority} from "../../../utils/constants/Constants";
import {style} from "./tags-style";
import {Global} from "frontity";

function Tags({text,type, clickable, isSelected}) {
    const clickableClass = clickable ? 'tag-clickable' : '';
    let priorityClass = type === Priority.PRIMARY ? `tag tag-primary ${clickableClass}` : `tag tag-secondary ${clickableClass}`;
    priorityClass = isSelected ? `tag tag-selected ${clickableClass}` : priorityClass;
    return (
        <>
            <Global styles={style}/>
            <div className={priorityClass}>
                <p>{text}</p>
            </div>
        </>

    );
}

export default Tags;