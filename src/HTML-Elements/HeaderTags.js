import React from 'react';

const HeaderTags = (props) => {
    // Object Destructuring - ES6
    const{Tag,className,text} = props;

    return (
        <>
            <Tag className={className}>
                {text}
            </Tag>        
        </>
    )
}

export default HeaderTags;
