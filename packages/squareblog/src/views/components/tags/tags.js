import React from 'react';
import {Priority} from "../../../utils/constants/Constants";
import {style} from "./tags-style";
import {Global} from "frontity";

function Tags({text,type, isSelected}) {
    let priorityClass = type === Priority.PRIMARY ? 'tag tag-primary' : 'tag tag-secondary';
    priorityClass = isSelected ? 'tag tag-selected' : priorityClass;
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