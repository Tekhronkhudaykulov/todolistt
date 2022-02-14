import React from 'react';

const TodoItem = ({images}) => {
    return (
        <>
        {
            images.map(item => (
            <img className='img' src={item.src} alt="" />
            ))
        }
        </>
        
    )
}
export default TodoItem;
